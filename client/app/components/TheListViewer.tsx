import React, { useContext } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { AppContext } from "../context/AppContext";
import { API_URI } from "../../API_URI";
import { Toast } from "toastify-react-native";

const TheListViewer = () => {
  let no = 1;

  const { listItems, getAllList } = useContext(AppContext);

  const handleSuccess = async (id: string) => {
    try {
      const apiResponse = await fetch(API_URI + `/task-success/${id}`, {
        method: "PUT",
      });

      const respData = await apiResponse.json();
      if (respData?.status === 200 && !respData?.error) {
        getAllList();
        Toast.success(respData?.message);
      }
      // console.log(respData);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete one record
  const handleDelete = async (id: string) => {
    try {
      const responseApi = await fetch(API_URI + `/delete-list-item/${id}`, {
        method: "DELETE",
      });

      const respData = await responseApi.json();
      if (respData?.status === 200 && !respData?.error) {
        Toast.success(respData?.message);
        getAllList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete all records
  const handleMultipleDelete = async () => {
    try {
      const response = await fetch(API_URI + `/delete-all`, {
        method: "DELETE",
      });

      const respData = await response.json();
      if (respData?.status === 200 && !respData?.error) {
        Toast.success(respData?.message);
        getAllList();
        return;
      }

      console.log(respData);
    } catch (error) {
      Toast.error("Technical error. Please try again later!");
      console.log(error);
    }
  };

  return (
    <View className=" mt-5 rounded-md">
      <View
        className={`${
          listItems.length > 0 ? " justify-between" : " justify-center"
        } flex flex-row items-center mt-10 mb-5`}
      >
        <Text
          style={{ fontFamily: "Sen-Bold" }}
          className=" text-2xl text-bone_white"
        >
          List of Items
        </Text>

        {listItems.length > 0 && (
          <TouchableOpacity onPress={handleMultipleDelete}>
            <FontAwesome5 name="trash" size={24} color="#EFE9D5" />
          </TouchableOpacity>
        )}
      </View>

      {listItems.length > 0 ? (
        <ScrollView className="bg-sub_primary p-5 rounded-md h-[37rem] overflow-y-scroll">
          {listItems.map(
            (item: { _id: string; name: string; status: boolean }) => {
              return (
                <View
                  className={`${
                    item?.status === true ? "bg-secondary" : "bg-blue_variant"
                  } rounded flex flex-row justify-between items-center p-3 mb-5`}
                  key={item?._id}
                >
                  <View className=" flex flex-row items-center gap-5">
                    <Text
                      style={{ fontFamily: "Sen-Medium" }}
                      className={`${
                        item?.status ? "text-bone_white" : "text-gray-800"
                      } text-xl`}
                    >
                      #{no++}
                    </Text>

                    <Text
                      style={{ fontFamily: "Sen-Regular" }}
                      className={`${
                        item?.status ? "text-bone_white" : "text-gray-800"
                      } text-xl`}
                    >
                      {item?.name}
                    </Text>
                  </View>

                  <View className=" flex flex-row items-center gap-4">
                    {!item?.status && (
                      <TouchableOpacity
                        onPress={() => handleSuccess(item?._id)}
                      >
                        <MaterialIcons name="done" size={24} color="black" />
                      </TouchableOpacity>
                    )}
                    {/* <Entypo name="edit" size={24} color="black" /> */}
                    <TouchableOpacity onPress={() => handleDelete(item?._id)}>
                      <FontAwesome5
                        name="trash"
                        size={24}
                        color={`${item?.status ? "white" : "black"}`}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }
          )}
        </ScrollView>
      ) : (
        <View className=" flex justify-center items-center">
          <Image
            className="w-40 h-40 mb-3"
            source={{
              uri: "https://pixcap.com/cdn/library/template/1725286925712/thumbnail/Empty_Calendar_3D_Animated_Icon_transparent_400_emp.webp",
            }}
          />

          <Text
            style={{ fontFamily: "Sen-Medium" }}
            className="text-secondary text-xl"
          >
            No items have been added yet.
          </Text>
        </View>
      )}
    </View>
  );
};

export default TheListViewer;

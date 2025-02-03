import React, { useContext, useEffect, useState } from "react";
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
      console.log(respData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className=" mt-5 rounded-md">
      <Text
        style={{ fontFamily: "Sen-Bold" }}
        className=" text-2xl text-center mt-10 text-bone_white mb-5"
      >
        List of Items
      </Text>

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
                      className="text-lg"
                    >
                      #{no++}
                    </Text>
                    <Text
                      style={{ fontFamily: "Sen-Regular" }}
                      className="text-lg"
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
                    <FontAwesome5 name="trash" size={24} color="black" />
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
            className=" text-slate-200 text-xl"
          >
            Currently no items added.
          </Text>
        </View>
      )}
    </View>
  );
};

export default TheListViewer;

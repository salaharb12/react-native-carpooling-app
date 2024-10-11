import { useAuth, useUser } from "@clerk/clerk-expo";
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { icons } from "@/constants";
import { useFetch } from "@/lib/fetch";
import { Ride } from "@/types/type";

const Profile = () => {
  const { user } = useUser();
  const emailVerified = user?.emailAddresses[0]?.verification;
  const { signOut } = useAuth();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const handleSignOut = () => {
    signOut();
    router.replace("/(auth)/sign-in");
  };
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const { data: recentRides, loading } = useFetch<Ride[]>(
    `/(api)/ride/${user?.id}`,
  );

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="px-5"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text className="text-2xl font-JakartaBold my-5">My Profile</Text>

        <View className="bg-gray-100 p-5 rounded-lg mb-4 shadow-sm shadow-neutral-300">
          <Text className="text-xl font-bold capitalize">{`${user?.firstName} ${user?.lastName}`}</Text>
          <Text className="text-gray-500">Welcome to your profile!</Text>
        </View>

        <View className="flex items-center justify-center my-5">
          <Image
            source={{
              uri: user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl,
            }}
            style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
            className="rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
          />
        </View>

        {/* Statistics Section TODO: Real Statiques*/}
        <View className="flex-row justify-around w-full bg-gray-50 p-3 rounded-lg mb-4 shadow-sm shadow-neutral-300">
          <View className="flex-1 items-center">
            <Text className="text-lg font-bold">
              {" "}
              {loading ? (
                <>
                  <ActivityIndicator size="small" color="#000" />
                </>
              ) : (
                <Text>{recentRides?.length}</Text>
              )}
            </Text>
            <Text className="text-gray-500">Rides</Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-lg font-bold">5</Text>
            <Text className="text-gray-500">Friends</Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-lg font-bold">3</Text>
            <Text className="text-gray-500">Achievements</Text>
          </View>
        </View>

        <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
          <InputField
            label="First Name"
            placeholder={user?.firstName || "Not Found"}
            containerStyle="w-full"
            inputStyle="p-3.5"
            editable={false}
          />

          <InputField
            label="Last Name"
            placeholder={user?.lastName || "Not Found"}
            containerStyle="w-full"
            inputStyle="p-3.5"
            editable={false}
          />

          <InputField
            label="Email"
            placeholder={user?.primaryEmailAddress?.emailAddress || "Not Found"}
            containerStyle="w-full"
            inputStyle="p-3.5"
            editable={false}
          />

          <InputField
            placeholderTextColor={emailVerified ? "#4CAF50" : "red"}
            label="Email Verified:"
            placeholder={emailVerified ? "Verified" : "Not Verified"}
            containerStyle="w-full mb-4"
            inputStyle={`p-3.5 border-2 transition-colors ${
              emailVerified
                ? "bg-green-100 border-green-400"
                : "bg-red-100 border-red-400"
            }`}
            editable={false}
          />
          <InputField
            label="Phone"
            placeholder={user?.primaryPhoneNumber?.phoneNumber || "Not Found"}
            containerStyle="w-full"
            inputStyle="p-3.5"
            editable={false}
          />
        </View>
        <View className="bg-white rounded-lg shadow-sm shadow-neutral-300 mb-4 mt-3">
          <TouchableOpacity
            onPress={toggleAccordion}
            className="flex-row justify-between items-center p-4 border-b border-gray-200"
          >
            <Text className="text-lg font-JakartaBold">Account settings:</Text>
            <View>
              {isAccordionOpen ? (
                <Image source={icons.arrowUp} className="w-4 h-4" />
              ) : (
                <Image source={icons.arrowDown} className="w-4 h-4" />
              )}
            </View>
          </TouchableOpacity>
          {isAccordionOpen && (
            <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
              <View className="flex-col w-full">
                <CustomButton
                  title="Edit Profile"
                  textVariant="primary"
                  onPress={() => {
                    /*TODO: Handle edit */
                  }}
                  IconLeft={() => (
                    <Image
                      source={icons.edit}
                      className="text-center h-4 w-4"
                      resizeMode="contain"
                    />
                  )}
                  disabled={true}
                  className="mb-3 w-full border-2 border-success-500 bg-success-200"
                />
                <CustomButton
                  title="Ride History"
                  bgVariant="outline"
                  textVariant="primary"
                  onPress={() => {
                    router.push("/(root)/(tabs)/rides");
                  }}
                  IconLeft={() => (
                    <Image
                      source={icons.list}
                      className="text-center h-5 w-5"
                      resizeMode="contain"
                    />
                  )}
                  className="mb-3 w-full border-2 border-blue-500 bg-blue-200"
                />
                <CustomButton
                  title="Sign Out"
                  onPress={() => {
                    handleSignOut();
                  }}
                  className="w-full border-2 border-red-500 bg-red-100"
                  bgVariant="outline"
                  textVariant="primary"
                  IconLeft={() => (
                    <Image
                      source={icons.out}
                      className="text-center h-5 w-5"
                      resizeMode="contain"
                    />
                  )}
                />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

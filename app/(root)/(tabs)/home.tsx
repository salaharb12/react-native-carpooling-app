import GoogleTextInput from "@/components/GoogleTextInput";
import Map from "@/components/Map";
import RideCard from "@/components/RideCard";
import { icons, images } from "@/constants";
import { useLocationStore } from "@/store";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const recentRides = [
  {
    ride_id: "1",
    origin_address: "Casablanca, Morocco",
    destination_address: "Rabat, Morocco",
    origin_latitude: "33.573110",
    origin_longitude: "-7.589843",
    destination_latitude: "34.020882",
    destination_longitude: "-6.841650",
    ride_time: 85,
    fare_price: "200.00",
    payment_status: "paid",
    driver_id: 1,
    user_id: "1",
    created_at: "2024-09-20 09:10:12.620007",
    driver: {
      driver_id: "1",
      first_name: "Ali",
      last_name: "Benjelloun",
      profile_image_url:
        "https://ucarecdn.com/11111111-2222-3333-4444-555555555555/-/preview/1000x666/",
      car_image_url:
        "https://ucarecdn.com/22222222-3333-4444-5555-666666666666/-/preview/930x932/",
      car_seats: 5,
      rating: "4.80",
    },
  },
  {
    ride_id: "2",
    origin_address: "Marrakesh, Morocco",
    destination_address: "Agadir, Morocco",
    origin_latitude: "31.629472",
    origin_longitude: "-7.981084",
    destination_latitude: "30.427755",
    destination_longitude: "-9.598107",
    ride_time: 180,
    fare_price: "500.00",
    payment_status: "paid",
    driver_id: 2,
    user_id: "2",
    created_at: "2024-09-21 12:45:08.683046",
    driver: {
      driver_id: "2",
      first_name: "Hassan",
      last_name: "Ouarzazate",
      profile_image_url:
        "https://ucarecdn.com/33333333-4444-5555-6666-777777777777/-/preview/1000x666/",
      car_image_url:
        "https://ucarecdn.com/44444444-5555-6666-7777-888888888888/-/preview/465x466/",
      car_seats: 4,
      rating: "4.60",
    },
  },
  {
    ride_id: "3",
    origin_address: "Fes, Morocco",
    destination_address: "Tangier, Morocco",
    origin_latitude: "34.018124",
    origin_longitude: "-5.007845",
    destination_latitude: "35.759465",
    destination_longitude: "-5.834038",
    ride_time: 240,
    fare_price: "700.00",
    payment_status: "paid",
    driver_id: 3,
    user_id: "3",
    created_at: "2024-09-22 08:22:40.809053",
    driver: {
      driver_id: "3",
      first_name: "Mohamed",
      last_name: "Fassi",
      profile_image_url:
        "https://ucarecdn.com/55555555-6666-7777-8888-999999999999/-/preview/1000x666/",
      car_image_url:
        "https://ucarecdn.com/66666666-7777-8888-9999-000000000000/-/preview/465x466/",
      car_seats: 4,
      rating: "4.75",
    },
  },
  {
    ride_id: "4",
    origin_address: "Ouarzazate, Morocco",
    destination_address: "Tinghir, Morocco",
    origin_latitude: "30.918943",
    origin_longitude: "-6.893053",
    destination_latitude: "31.514700",
    destination_longitude: "-5.530404",
    ride_time: 90,
    fare_price: "250.00",
    payment_status: "paid",
    driver_id: 4,
    user_id: "4",
    created_at: "2024-09-23 15:05:54.297838",
    driver: {
      driver_id: "4",
      first_name: "Youssef",
      last_name: "Dades",
      profile_image_url:
        "https://ucarecdn.com/77777777-8888-9999-0000-111111111111/-/preview/826x822/",
      car_image_url:
        "https://ucarecdn.com/88888888-9999-0000-1111-222222222222/-/preview/930x932/",
      car_seats: 4,
      rating: "4.90",
    },
  },
];

export default function Page() {
  const { setUserLocation, setDestinationLocation, userAddress } =
    useLocationStore();
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [hasPermissions, setHasPermissions] = useState(false);
  const handleSignOut = () => {};
  const handleDestinationPress = (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    setDestinationLocation(location);

    router.push("/(root)/find-ride");
  };

  useEffect(() => {
    const requestLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setHasPermissions(false);
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      console.log("Location : ", location);
      const adress = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.altitude!,
      });
      console.log("Adress", adress);
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        address: `${adress[0].name}, ${adress[0].region}`,
      });
      setLoading(false);
    };
    requestLocation();
  }, [setUserLocation]);
  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={recentRides.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  className="w-40 h-40"
                  alt="No Recent Rides Found"
                  resizeMode="contain"
                />
                <Text className="text-sm">No recent rides found!</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <View className="flex flex-row items-center justify-between my-5">
              <Text className="text-2xl font-JakartaExtraBold capitalize">
                Welcom{", "}
                {userAddress} 👋🏻
              </Text>
              <TouchableOpacity
                onPress={handleSignOut}
                className="justify-center items-center w-10 h-10 rounded-full bg-white"
              >
                <Image source={icons.out} className="w-4 h-4" />
              </TouchableOpacity>
            </View>
            <GoogleTextInput
              icon={icons.search}
              containerStyle="bg-white shadow-md shadow-neutral-300"
              handlePress={handleDestinationPress}
            />
            <>
              <Text className="text-xl font-JakartaBold mt-5 mb-3">
                Your Current Location
              </Text>
              <View className="flex flex-row items-center bg-transparent h-[300px]">
                <Map />
              </View>
            </>
            <Text className="text-xl font-JakartaBold mt-5 mb-3">
              Recent Rides
            </Text>
          </>
        )}
      />
    </SafeAreaView>
  );
}

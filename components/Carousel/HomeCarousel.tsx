import { diNhoXe, timYenSau } from "assets/images";
import React, { useRef } from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import tw from "twrnc";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const HomeCarousel = () => {
	const [index, setIndex] = React.useState(0);
	const isCarousel = useRef<any>(null);

	const data = [
		{
			title: "Aenean leo",
			body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
			imgUrl: "https://picsum.photos/id/11/200/300",
		},
		{
			title: "In turpis",
			body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
			imgUrl: "https://picsum.photos/id/10/200/300",
		},
		{
			title: "Lorem Ipsum",
			body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
			imgUrl: "https://picsum.photos/id/12/200/300",
		},
	];

	return (
		<View style={tw`items-center `}>
			<Carousel
				layout={"default"}
				ref={isCarousel}
				data={[
					{
						id: 1,
						source: timYenSau,
					},
					{
						id: 2,
						source: diNhoXe,
					},
				]}
				sliderWidth={SLIDER_WIDTH}
				itemWidth={ITEM_HEIGHT}
				renderItem={({ item }) => (
					<Image
						key={item.id}
						source={item.source}
						style={tw`w-58 h-58 my-4`}
					/>
				)}
			/>
		</View>
	);
};

export default HomeCarousel;

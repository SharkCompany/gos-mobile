import { FixMeLater } from "interfaces/migration";
import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTimePicker = ({
	isVisible,
	setIsVisible,
	selectHandler,
}: FixMeLater) => {
	const hideDatePicker = () => {
		if (setIsVisible) {
			setIsVisible(false);
		}
	};

	const handleConfirm = (date: FixMeLater) => {
		if (selectHandler) {
			selectHandler(date);
		}
		hideDatePicker();
	};

	return (
		<>
			<View>
				<DateTimePickerModal
					isVisible={isVisible}
					mode="datetime"
					onConfirm={handleConfirm}
					onCancel={hideDatePicker}
				/>
			</View>
		</>
	);
};

export default DateTimePicker;

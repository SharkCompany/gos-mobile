import { FixMeLater } from "interfaces/migration";
import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTimePicker = () => {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date: FixMeLater) => {
		console.warn("A date has been picked: ", date);
		hideDatePicker();
	};

	return (
		<>
			<View>
				<Button title="Show Date Picker" onPress={showDatePicker} />
				<DateTimePickerModal
					isVisible={isDatePickerVisible}
					mode="datetime"
					onConfirm={handleConfirm}
					onCancel={hideDatePicker}
				/>
			</View>
		</>
	);
};

export default DateTimePicker;

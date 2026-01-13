import { useState } from "react";

export const useEditable = <T extends object>(
	initialData: T | undefined,
	onSave: (data: Partial<T>) => Promise<void>,
) => {
	const [isEditing, setIsEditing] = useState(false);
	const [formData, setFormData] = useState<Partial<T>>({});
	const [isSaving, setIsSaving] = useState(false);

	const startEdit = () => {
		if (initialData) {
			setFormData(initialData);
			setIsEditing(true);
		}
	};

	const cancelEdit = () => {
		setIsEditing(false);
		setFormData({});
	};

	const saveEdit = async () => {
		setIsSaving(true);
		try {
			await onSave(formData);
			setIsEditing(false);
		} catch (error) {
			console.error("Failed to save changes", error);
			throw error;
		} finally {
			setIsSaving(false);
		}
	};

	const handleInputChange = (
		key: keyof T,
		value: T[keyof T] | string | number,
	) => {
		setFormData((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	return {
		isEditing,
		formData,
		isSaving,
		startEdit,
		cancelEdit,
		saveEdit,
		handleInputChange,
	};
};

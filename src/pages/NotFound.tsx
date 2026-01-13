import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const NotFound: FC = () => {
	const { t } = useTranslation();

	return (
		<div className="min-h-screen flex items-center justify-center text-center">
			<div>
				<h1 className="text-4xl font-bold mb-4">{t("notFound.title")}</h1>
				<p className="text-gray-600">{t("notFound.description")}</p>
			</div>
		</div>
	);
};

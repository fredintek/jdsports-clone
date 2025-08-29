import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function CatchAllPage() {
  const t = useTranslations();
  return (
    <div className="flex-1 flex items-center justify-center text-center p-8 border">
      <div>
        <p className="text-lg text-gray-600 mb-2">{t("NOT_FOUND")}</p>
        <Link
          replace
          href="/"
          className="inline-block bg-ayda-pink-dark text-white px-6 py-3 rounded hover:bg-ayda-blue transition-colors"
        >
          {t("BACK_TO_HOME")}
        </Link>
      </div>
    </div>
  );
}

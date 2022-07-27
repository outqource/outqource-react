import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

export default function useI18n(): TFunction {
  const { t } = useTranslation();
  return t;
}

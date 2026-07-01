import SetHtmlLang from '@/components/SetHtmlLang';

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SetHtmlLang lang="fr-CH" />
      {children}
    </>
  );
}

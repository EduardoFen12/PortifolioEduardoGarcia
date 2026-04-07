import { useAppContext } from '../../context/AppContext';

export function Footer() {
  const { translations } = useAppContext();

  return (
    <footer className="pt-12 text-center text-sm text-textMuted">
      <p>{translations.footer.text}</p>
    </footer>
  );
}

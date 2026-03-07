import { useEffect } from 'react';
import { useLangStore } from '../store/useLangStore.js';

const BtnLang = () => {
  const { lang, setLang } = useLangStore();

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'id',
        includedLanguages: 'en,id',
        autoDisplay: false,
      }, 'google_translate_element');
    };

    if (!document.querySelector('#google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');

    if (urlLang && (urlLang === 'id' || urlLang === 'en') && urlLang !== lang) {
      setLang(urlLang);
    }
  }, []);

  const handleToggle = () => {
    const nextLang = lang === 'id' ? 'en' : 'id';

    const newUrl = new URL(window.location);
    newUrl.searchParams.set('lang', nextLang);
    window.history.pushState({}, '', newUrl);

    setLang(nextLang);

    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = nextLang;
      select.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center">

      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <label htmlFor="lang" className='swap swap-rotate text-xs font-semibold notranslate'>
        <input
          type="checkbox"
          id="lang"
          onChange={handleToggle}
          checked={lang === 'en'}
        />

        <div className='swap-on'>
          EN
        </div>

        <div className='swap-off'>
          ID
        </div>
      </label>
    </div>
  );
};

export default BtnLang;
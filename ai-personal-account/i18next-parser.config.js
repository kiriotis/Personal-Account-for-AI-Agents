export default {
    contextSeparator: '_',
    createOldCatalogs: false,
    defaultNamespace: 'translation',
    defaultValue: '',
    indentation: 2,
    keepRemoved: false,
    keySeparator: '.',
    lexers: {
      js: ['JavascriptLexer'],
      ts: ['JavascriptLexer'],
      jsx: ['JavascriptLexer'],
      tsx: ['JavascriptLexer'],
      default: ['JavascriptLexer']
    },
    lineEnding: 'auto',
    locales: ['en', 'ru'],
    namespaceSeparator: false,
    output: 'src/locales/$LOCALE/$NAMESPACE.json',
    input: ['src/**/*.{js,jsx,ts,tsx}'],
    sort: true,
    verbose: true,
    useKeysAsDefaultValue: false,
    pluralSeparator: '_',
    defaultValue: (locale, namespace, key) => key,
    parseDefaultValueFromKey: true
  };
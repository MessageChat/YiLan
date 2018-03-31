/* eslint-disable */
const supportedFileTypes = [
  {
    "id": "plaintext",
    "names": [
      "LICENSE"
    ],
    "extensions": [
      ".txt",
      ".gitignore"
    ],
    "aliases": [
      "Plain Text",
      "text"
    ],
    "mimetypes": [
      "text/plain"
    ]
  },
  {
    "id": "typescript",
    "extensions": [
      ".ts",
      ".tsx"
    ],
    "aliases": [
      "TypeScript",
      "ts",
      "typescript"
    ],
    "mimetypes": [
      "text/typescript"
    ]
  },
  {
    "id": "javascript",
    "extensions": [
      ".js",
      ".es6",
      ".jsx"
    ],
    "firstLine": "^#!.*\\bnode",
    "filenames": [
      "jakefile"
    ],
    "aliases": [
      "JavaScript",
      "javascript",
      "js"
    ],
    "mimetypes": [
      "text/javascript"
    ]
  },
  {
    "id": "json",
    "extensions": [
      ".json",
      ".bowerrc",
      ".jshintrc",
      ".jscsrc",
      ".eslintrc",
      ".babelrc"
    ],
    "aliases": [
      "JSON",
      "json"
    ],
    "mimetypes": [
      "application/json"
    ]
  },
  {
    "id": "bat",
    "extensions": [
      ".bat",
      ".cmd"
    ],
    "aliases": [
      "Batch",
      "bat"
    ],
    "module": "./bat"
  },
  {
    "id": "coffeescript",
    "extensions": [
      ".coffee"
    ],
    "aliases": [
      "CoffeeScript",
      "coffeescript",
      "coffee"
    ],
    "mimetypes": [
      "text/x-coffeescript",
      "text/coffeescript"
    ],
    "module": "./coffee"
  },
  {
    "id": "c",
    "extensions": [
      ".c",
      ".h"
    ],
    "aliases": [
      "C",
      "c"
    ],
    "module": "./cpp"
  },
  {
    "id": "cpp",
    "extensions": [
      ".cpp",
      ".cc",
      ".cxx",
      ".hpp",
      ".hh",
      ".hxx"
    ],
    "aliases": [
      "C++",
      "Cpp",
      "cpp"
    ],
    "module": "./cpp"
  },
  {
    "id": "csharp",
    "extensions": [
      ".cs",
      ".csx"
    ],
    "aliases": [
      "C#",
      "csharp"
    ],
    "module": "./csharp"
  },
  {
    "id": "dockerfile",
    "extensions": [
      ".dockerfile"
    ],
    "filenames": [
      "Dockerfile"
    ],
    "aliases": [
      "Dockerfile"
    ],
    "module": "./dockerfile"
  },
  {
    "id": "fsharp",
    "extensions": [
      ".fs",
      ".fsi",
      ".ml",
      ".mli",
      ".fsx",
      ".fsscript"
    ],
    "aliases": [
      "F#",
      "FSharp",
      "fsharp"
    ],
    "module": "./fsharp"
  },
  {
    "id": "go",
    "extensions": [
      ".go"
    ],
    "aliases": [
      "Go"
    ],
    "module": "./go"
  },
  {
    "id": "handlebars",
    "extensions": [
      ".handlebars",
      ".hbs"
    ],
    "aliases": [
      "Handlebars",
      "handlebars"
    ],
    "mimetypes": [
      "text/x-handlebars-template"
    ],
    "module": "./handlebars"
  },
  {
    "id": "html",
    "extensions": [
      ".html",
      ".htm",
      ".shtml",
      ".xhtml",
      ".mdoc",
      ".jsp",
      ".asp",
      ".aspx",
      ".jshtm"
    ],
    "aliases": [
      "HTML",
      "htm",
      "html",
      "xhtml"
    ],
    "mimetypes": [
      "text/html",
      "text/x-jshtm",
      "text/template",
      "text/ng-template"
    ],
    "module": "./html"
  },
  {
    "id": "ini",
    "extensions": [
      ".ini",
      ".properties",
      ".gitconfig"
    ],
    "filenames": [
      "config",
      ".gitattributes",
      ".gitconfig",
      ".editorconfig"
    ],
    "aliases": [
      "Ini",
      "ini"
    ],
    "module": "./ini"
  },
  {
    "id": "pug",
    "extensions": [
      ".jade",
      ".pug"
    ],
    "aliases": [
      "Pug",
      "Jade",
      "jade"
    ],
    "module": "./pug"
  },
  {
    "id": "java",
    "extensions": [
      ".java",
      ".jav"
    ],
    "aliases": [
      "Java",
      "java"
    ],
    "mimetypes": [
      "text/x-java-source",
      "text/x-java"
    ],
    "module": "./java"
  },
  {
    "id": "lua",
    "extensions": [
      ".lua"
    ],
    "aliases": [
      "Lua",
      "lua"
    ],
    "module": "./lua"
  },
  {
    "id": "markdown",
    "extensions": [
      ".md",
      ".markdown",
      ".mdown",
      ".mkdn",
      ".mkd",
      ".mdwn",
      ".mdtxt",
      ".mdtext"
    ],
    "aliases": [
      "Markdown",
      "markdown"
    ],
    "module": "./markdown"
  },
  {
    "id": "msdax",
    "extensions": [
      ".dax",
      ".msdax"
    ],
    "aliases": [
      "DAX",
      "MSDAX"
    ],
    "module": "./msdax"
  },
  {
    "id": "objective-c",
    "extensions": [
      ".m"
    ],
    "aliases": [
      "Objective-C"
    ],
    "module": "./objective-c"
  },
  {
    "id": "postiats",
    "extensions": [
      ".dats",
      ".sats",
      ".hats"
    ],
    "aliases": [
      "ATS",
      "ATS/Postiats"
    ],
    "module": "./postiats"
  },
  {
    "id": "php",
    "extensions": [
      ".php",
      ".php4",
      ".php5",
      ".phtml",
      ".ctp"
    ],
    "aliases": [
      "PHP",
      "php"
    ],
    "mimetypes": [
      "application/x-php"
    ],
    "module": "./php"
  },
  {
    "id": "powershell",
    "extensions": [
      ".ps1",
      ".psm1",
      ".psd1"
    ],
    "aliases": [
      "PowerShell",
      "powershell",
      "ps",
      "ps1"
    ],
    "module": "./powershell"
  },
  {
    "id": "python",
    "extensions": [
      ".py",
      ".rpy",
      ".pyw",
      ".cpy",
      ".gyp",
      ".gypi"
    ],
    "aliases": [
      "Python",
      "py"
    ],
    "firstLine": "^#!/.*\\bpython[0-9.-]*\\b",
    "module": "./python"
  },
  {
    "id": "r",
    "extensions": [
      ".r",
      ".rhistory",
      ".rprofile",
      ".rt"
    ],
    "aliases": [
      "R",
      "r"
    ],
    "module": "./r"
  },
  {
    "id": "razor",
    "extensions": [
      ".cshtml"
    ],
    "aliases": [
      "Razor",
      "razor"
    ],
    "mimetypes": [
      "text/x-cshtml"
    ],
    "module": "./razor"
  },
  {
    "id": "ruby",
    "extensions": [
      ".rb",
      ".rbx",
      ".rjs",
      ".gemspec",
      ".pp"
    ],
    "filenames": [
      "rakefile"
    ],
    "aliases": [
      "Ruby",
      "rb"
    ],
    "module": "./ruby"
  },
  {
    "id": "swift",
    "aliases": [
      "Swift",
      "swift"
    ],
    "extensions": [
      ".swift"
    ],
    "mimetypes": [
      "text/swift"
    ],
    "module": "./swift"
  },
  {
    "id": "sql",
    "extensions": [
      ".sql"
    ],
    "aliases": [
      "SQL"
    ],
    "module": "./sql"
  },
  {
    "id": "vb",
    "extensions": [
      ".vb"
    ],
    "aliases": [
      "Visual Basic",
      "vb"
    ],
    "module": "./vb"
  },
  {
    "id": "xml",
    "extensions": [
      ".xml",
      ".dtd",
      ".ascx",
      ".csproj",
      ".config",
      ".wxi",
      ".wxl",
      ".wxs",
      ".xaml",
      ".svg",
      ".svgz",
      ".classpath",
      ".project"
    ],
    "firstLine": "(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",
    "aliases": [
      "XML",
      "xml"
    ],
    "mimetypes": [
      "text/xml",
      "application/xml",
      "application/xaml+xml",
      "application/xml-dtd"
    ],
    "module": "./xml"
  },
  {
    "id": "less",
    "extensions": [
      ".less"
    ],
    "aliases": [
      "Less",
      "less"
    ],
    "mimetypes": [
      "text/x-less",
      "text/less"
    ],
    "module": "./less"
  },
  {
    "id": "scss",
    "extensions": [
      ".scss"
    ],
    "aliases": [
      "Sass",
      "sass",
      "scss"
    ],
    "mimetypes": [
      "text/x-scss",
      "text/scss"
    ],
    "module": "./scss"
  },
  {
    "id": "css",
    "extensions": [
      ".css"
    ],
    "aliases": [
      "CSS",
      "css"
    ],
    "mimetypes": [
      "text/css"
    ],
    "module": "./css"
  },
  {
    "id": "yaml",
    "extensions": [
      ".yaml",
      ".yml"
    ],
    "aliases": [
      "YAML",
      "yaml",
      "YML",
      "yml"
    ],
    "mimetypes": [
      "application/x-yaml"
    ],
    "module": "./yaml"
  },
  {
    "id": "sol",
    "extensions": [
      ".sol"
    ],
    "aliases": [
      "sol",
      "solidity",
      "Solidity"
    ],
    "module": "./solidity"
  },
  {
    "id": "sb",
    "extensions": [
      ".sb"
    ],
    "aliases": [
      "Small Basic",
      "sb"
    ],
    "module": "./sb"
  }
];
/* eslint-enable */

export default supportedFileTypes;

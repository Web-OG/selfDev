import {Project} from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
const isAbsolute = (value: string) => {
  return layers.some((layer) => value.startsWith(layer));
};

const isRelativeWithLayer = (value: string) => {
  if (!value.startsWith('./') && !value.startsWith('../')) {
    return false;
  }

  const parts = value.split('/');
  let keywordIndex = -1;

  for (let i = 0; i < parts.length; i++) {
    if (layers.includes(parts[i])) {
      keywordIndex = i;
      break;
    }
  }

  if (keywordIndex !== -1) {
    return parts.slice(keywordIndex).join('/').replace(/\/+/g, '/');
  }

  return false;
};


files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }

    const trimmedPath = isRelativeWithLayer(value);

    if (trimmedPath) {
      importDeclaration.setModuleSpecifier(`@/${trimmedPath}`);
    }
  });
});

project.save();

import { Component } from '@angular/core';

const v1 = {
  'name': 't-json-viewer',
  'version': '1.2.0',
  'license': 'BSD 3-clause',
  'description': 'Angular 2 component for objects debug (Collapsible JSON in HTML like in Chrome DevTools)',
  'main': 'index.ts',
  'types examples': {
    'ex string': 'Hello World!',
    'ex zero': 0,
    'ex number': 666,
    'ex float': 3.1415926,
    'ex truthy boolean': true,
    'ex falsy boolean': false,
    'ex null': null,
    'ex undefined': undefined,
    'ex date': new Date(),
    'ex array': [0, 1, 2, 3, null, 5, 6, undefined, '8', { z: 9 }, 'ten'],
    'ex object': {
      'ex string': 'Hello World!',
      'ex object': {
        'ex string': 'Hello World!',
        'ex object': {
          'ex string': 'Hello World!',
          'ex zero': 0,
          'ex number': 666,
          'ex float': 3.1415926,
          'ex object': {
            'ex string': 'Hello World!',
            'ex zero': 0,
            'ex number': 666,
            'ex float': 3.1415926,
            'ex truthy boolean': true,
            'ex falsy boolean': false,
            'ex null': null,
            'ex undefined': undefined,
          },
          'ex truthy boolean': true,
          'ex falsy boolean': false,
          'ex null': null,
          'ex undefined': undefined,
        },
        'ex zero': 0,
        'ex number': 666,
        'ex float': 3.1415926,
        'ex truthy boolean': true,
        'ex falsy boolean': false,
        'ex null': null,
        'ex undefined': undefined,
      },
      'ex zero': 0,
      'ex number': 666,
      'ex float': 3.1415926,
      'ex truthy boolean': true,
      'ex falsy boolean': false,
      'ex null': null,
      'ex undefined': undefined,
    }
  },
  'scripts': {
    'ng': 'ng',
    'start': 'ng serve',
    'lint': 'tslint "src/**/*.ts"',
    'test': 'ng test'
  },
  'keywords': [
    'angular2',
    '@angular',
    'json'
  ],
  'author': 'Artem Koziar [temich] <a@temich.in.ua>',
  'repository': {
    'type': 'git',
    'url': 'git+https://github.com/temich666/t-json-viewer.git'
  },
  'homepage': 'https://github.com/temich666/t-json-viewer#readme',
  'bugs': {
    'url': 'https://github.com/temich666/t-json-viewer/issues',
    'email': 'a@temich.in.ua'
  }
};

const v2 = {
  a: [1, 2, 3],
  b: 1,
  c: {
    d: 8
  }
};

const v3 = {'Type': 'Service',
  'NuGetConfig': {
    'SolutionFilePath': 'fn.sln',
    'NugetProjectPath': null,
    'AddDebugBuildJob': null,
    'AddPreviewReleaseJob': null,
    'UnitTestProjectPaths': null,
    'Version': '1.4.3',
    'NextBuildNumber': '343',
    'RecipientList': null
  },
  'SFConfig': {
    'SolutionFilePath': 'fn.sln',
    'SfProjectPath': '/test/',
    'ClusterTypes': ['STANDARD', 'AQL', 'SFDC'],
    'UnitTestProjectPaths': null,
    'Version': '1.4.3',
    'NextBuildNumber': '343',
    'RecipientList': null
  },
  'JavascriptConfig': {
    'RootDirectoryPath': null,
    'ArtifactoryDirectoryName': null,
    'BuildFolder': null,
    'Product': null,
    'IsGulpPackaging': null,
    'NextBuildNumber': '343',
    'RecipientList': null
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  v1 = v1;
  v2 = v2;
  v3 = v3;

  config: any = v1;

  changeConfig(v) {
    this.config = v;
  }
}

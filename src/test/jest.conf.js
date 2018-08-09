module.exports = {
    preset: 'jest-preset-angular',
    setupTestFrameworkScriptFile: '<rootDir>/src/test/jest.ts',
    coverageDirectory: '<rootDir>/dist/test-results/',
    globals: {
        'ts-jest': {
            tsConfigFile: './tsconfig.spec.json'
        },
        __TRANSFORM_HTML__: true
    },
    moduleNameMapper: {
        '@app/(.*)': '<rootDir>/app/$1'
    },
    reporters: ['default', ['jest-junit', {output: './dist/test-results/jest/TESTS-results.xml'}]],
    testResultsProcessor: 'jest-sonar-reporter',
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    transformIgnorePatterns: ['node_modules/(?!@angular/common/locales|ng-snotify)'],
    testMatch: ['<rootDir>/src/test/**/+(*.)+(spec|test).+(ts|js)?(x)'],
    rootDir: '../../../',
    testEnvironment: 'jsdom',
    testURL: 'http://localhost/'
};

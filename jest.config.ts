import {Config, createConfig} from '@umijs/test';

export default {
    ...createConfig(),
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverageFrom: ['src/**/*.{ts,js,tsx,jsx}'],
    roots: ['<rootDir>/src', '<rootDir>/test'],
    testMatch: ['<rootDir>/test/**/*.(test|spec).[jt]s?(x)'],

    preset: 'ts-jest',


} as Config.InitialOptions;
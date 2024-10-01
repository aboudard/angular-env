export const environment = {
    production: false,
    myVar: process?.env['MY_VAR'] || 'defaultValue'
};

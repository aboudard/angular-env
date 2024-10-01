export const environment = {
    production: true,
    myVar: process?.env['MY_VAR'] || 'defaultValue'
};

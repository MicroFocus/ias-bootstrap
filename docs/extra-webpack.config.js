// This file is used in conjunction with the tool: @angular-builders/custom-webpack.  It provides a way to customize
// the webpack build script used by angular.json.
module.exports = {
    output: {
        jsonpFunction: 'iasBootstrapWebpackJsonp'
    },
    module: {
        rules: [
            // These rules are used to process the third party css files, and replace the relative URLs for fonts and
            // images with URLs relative to the assets/{3rd-party-lib} folder. These assets get copied using
            // angular.json's "assets" configuration section.

            {
                test: /ias-icons\.scss$/,
                use: [
                    {
                        loader: 'string-replace-loader',
                        options: { search: '\\./fonts/', replace: '^assets/ias-icons/fonts/', flags: 'g' }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /bootstrap\.scss$/,
                use: [
                    {
                        loader: 'string-replace-loader',
                        options: { search: '\\.\\./fonts/', replace: '^assets/bootstrap/fonts/', flags: 'g' }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /ux-aspects\.scss$/,
                use: [
                    {
                        loader: 'string-replace-loader',
                        options: {
                            multiple: [
                                { search: '\\.\\./img/', replace: '^assets/ux-aspects/img/', flags: 'g' },
                                { search: '\\.\\./fonts/', replace: '^assets/ux-aspects/fonts/', flags: 'g' }
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
};

/* tslint:disable */
/* eslint-disable */
/**
 * TBLogin
 * TBLogin
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LoginApiResponseAllOf
 */
export interface LoginApiResponseAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof LoginApiResponseAllOf
     */
    loggedIn?: boolean;
}

/**
 * Check if a given object implements the LoginApiResponseAllOf interface.
 */
export function instanceOfLoginApiResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LoginApiResponseAllOfFromJSON(json: any): LoginApiResponseAllOf {
    return LoginApiResponseAllOfFromJSONTyped(json, false);
}

export function LoginApiResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginApiResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'loggedIn': !exists(json, 'loggedIn') ? undefined : json['loggedIn'],
    };
}

export function LoginApiResponseAllOfToJSON(value?: LoginApiResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'loggedIn': value.loggedIn,
    };
}

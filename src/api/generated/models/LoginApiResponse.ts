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
 * @interface LoginApiResponse
 */
export interface LoginApiResponse {
    /**
     * 
     * @type {string}
     * @memberof LoginApiResponse
     */
    errorCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LoginApiResponse
     */
    errorDetail?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof LoginApiResponse
     */
    loggedIn?: boolean;
}

/**
 * Check if a given object implements the LoginApiResponse interface.
 */
export function instanceOfLoginApiResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LoginApiResponseFromJSON(json: any): LoginApiResponse {
    return LoginApiResponseFromJSONTyped(json, false);
}

export function LoginApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginApiResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'errorDetail': !exists(json, 'errorDetail') ? undefined : json['errorDetail'],
        'loggedIn': !exists(json, 'loggedIn') ? undefined : json['loggedIn'],
    };
}

export function LoginApiResponseToJSON(value?: LoginApiResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errorCode': value.errorCode,
        'errorDetail': value.errorDetail,
        'loggedIn': value.loggedIn,
    };
}


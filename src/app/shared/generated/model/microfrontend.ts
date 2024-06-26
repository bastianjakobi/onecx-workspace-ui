/**
 * onecx-workspace-bff
 * OneCX Workspace BFF
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MicrofrontendType } from './microfrontendType';


export interface Microfrontend { 
    id?: string;
    appId?: string;
    appName?: string;
    basePath?: string;
    deprecated?: boolean;
    undeployed?: boolean;
    type?: MicrofrontendType;
}




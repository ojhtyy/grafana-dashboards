/* tslint:disable */
/* eslint-disable */
/**
 * PMM QAN API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InlineResponse2005QueryExamples,
    InlineResponse2005QueryExamplesFromJSON,
    InlineResponse2005QueryExamplesFromJSONTyped,
    InlineResponse2005QueryExamplesToJSON,
} from './';

/**
 * QueryExampleReply list of query examples.
 * @export
 * @interface InlineResponse2005
 */
export interface InlineResponse2005 {
    /**
     * 
     * @type {Array<InlineResponse2005QueryExamples>}
     * @memberof InlineResponse2005
     */
    query_examples?: Array<InlineResponse2005QueryExamples>;
}

export function InlineResponse2005FromJSON(json: any): InlineResponse2005 {
    return InlineResponse2005FromJSONTyped(json, false);
}

export function InlineResponse2005FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2005 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'query_examples': !exists(json, 'query_examples') ? undefined : ((json['query_examples'] as Array<any>).map(InlineResponse2005QueryExamplesFromJSON)),
    };
}

export function InlineResponse2005ToJSON(value?: InlineResponse2005 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'query_examples': value.query_examples === undefined ? undefined : ((value.query_examples as Array<any>).map(InlineResponse2005QueryExamplesToJSON)),
    };
}



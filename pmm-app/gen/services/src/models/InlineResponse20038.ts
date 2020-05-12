/* tslint:disable */
/* eslint-disable */
/**
 * PMM API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: public
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InlineResponse20014QanPostgresqlPgstatementsAgent,
    InlineResponse20014QanPostgresqlPgstatementsAgentFromJSON,
    InlineResponse20014QanPostgresqlPgstatementsAgentFromJSONTyped,
    InlineResponse20014QanPostgresqlPgstatementsAgentToJSON,
    InlineResponse20028Postgresql,
    InlineResponse20028PostgresqlFromJSON,
    InlineResponse20028PostgresqlFromJSONTyped,
    InlineResponse20028PostgresqlToJSON,
    InlineResponse2009PostgresExporter,
    InlineResponse2009PostgresExporterFromJSON,
    InlineResponse2009PostgresExporterFromJSONTyped,
    InlineResponse2009PostgresExporterToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse20038
 */
export interface InlineResponse20038 {
    /**
     * 
     * @type {InlineResponse20028Postgresql}
     * @memberof InlineResponse20038
     */
    service?: InlineResponse20028Postgresql;
    /**
     * 
     * @type {InlineResponse2009PostgresExporter}
     * @memberof InlineResponse20038
     */
    postgres_exporter?: InlineResponse2009PostgresExporter;
    /**
     * 
     * @type {InlineResponse20014QanPostgresqlPgstatementsAgent}
     * @memberof InlineResponse20038
     */
    qan_postgresql_pgstatements_agent?: InlineResponse20014QanPostgresqlPgstatementsAgent;
}

export function InlineResponse20038FromJSON(json: any): InlineResponse20038 {
    return InlineResponse20038FromJSONTyped(json, false);
}

export function InlineResponse20038FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse20038 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'service': !exists(json, 'service') ? undefined : InlineResponse20028PostgresqlFromJSON(json['service']),
        'postgres_exporter': !exists(json, 'postgres_exporter') ? undefined : InlineResponse2009PostgresExporterFromJSON(json['postgres_exporter']),
        'qan_postgresql_pgstatements_agent': !exists(json, 'qan_postgresql_pgstatements_agent') ? undefined : InlineResponse20014QanPostgresqlPgstatementsAgentFromJSON(json['qan_postgresql_pgstatements_agent']),
    };
}

export function InlineResponse20038ToJSON(value?: InlineResponse20038 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'service': InlineResponse20028PostgresqlToJSON(value.service),
        'postgres_exporter': InlineResponse2009PostgresExporterToJSON(value.postgres_exporter),
        'qan_postgresql_pgstatements_agent': InlineResponse20014QanPostgresqlPgstatementsAgentToJSON(value.qan_postgresql_pgstatements_agent),
    };
}



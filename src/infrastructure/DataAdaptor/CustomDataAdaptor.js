import { DataManager, RemoteSaveAdaptor , DataUtil ,UrlAdaptor , Query } from '@syncfusion/ej2-data';
import { merge, extend, isNullOrUndefined, setValue, getValue } from '@syncfusion/ej2-base';
import { authentication } from 'services/UserService';


export class CustomDataAdaptor extends RemoteSaveAdaptor {

    
    remove(dm, keyField, val, tableName, query){
       
        return {
            type: 'POST',
            url: dm.dataSource.removeUrl || dm.dataSource.crudUrl || dm.dataSource.url,
            data: JSON.stringify(extend({}, {
                key: val,
                keyColumn: keyField,
                table: tableName,
                action: 'remove'
            }, DataUtil.getAddParams(this, dm, query))),
            headers : {
                ...authentication()
            }

        };
    }
}


export class CustomApiAdaptor extends UrlAdaptor {
    onGroup (ds, e, query) {
            
        
        
        if (!ds || !ds.length) {
            return ds;
        }
        var aggQuery = Query.filterQueries(query.queries, 'onAggregates');
        var agg = [];
        if (aggQuery.length) {
            var tmp = void 0;
            for (var i = 0; i < aggQuery.length; i++) {
                tmp = aggQuery[i].e;
                agg.push({ type: tmp.type, field: DataUtil.getValue(tmp.field, query) });
            }
        }
        return DataUtil.group(ds, DataUtil.getValue(e.fieldName, query), agg, null, null, e.comparer);
    };  
} 
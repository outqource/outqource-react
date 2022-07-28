var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { QueryClient, QueryClientProvider, useQuery, useMutation } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
export var defaultQueryClientOptions = {
    defaultOptions: { queries: { refetchOnMount: false } },
};
export var createUseQueries = function (params) {
    return params.map(function (param) {
        return function (props) {
            if (!props)
                props = {};
            var queryKey = (typeof param.key !== 'function' ? param.key : param.key(props.key));
            var queryFn = (props.fn ? param.fn(props.fn) : param.fn);
            var queryOptions = __assign(__assign({}, (param.options || {})), (props.options || {}));
            return useQuery(queryKey, queryFn, queryOptions);
        };
    });
};
export { QueryClient, QueryClientProvider, ReactQueryDevtools, useMutation };
//# sourceMappingURL=index.js.map
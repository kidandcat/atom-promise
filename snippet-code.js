'.source.js':
   'promise':
     'prefix': 'promise'
     'body': """var success = null;
              var error = null;

              (success || Function)(params);

              return {
                then: function(cb) {
                  success = cb;
                  return this;
                },
                error: function(cb) {
                  error = cb;
                  return this;
                }
              };"""

'.source.js':
   'promise':
     'prefix': 'promise'
     'body': """var success = null;
              var error = null;

              (success)?success(params):null;

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

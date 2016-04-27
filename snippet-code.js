'.source.js':
   'promise':
     'prefix': 'promise'
     'body': """var success = null;
              var error = null;

              {code}

              return {
                then: function(cb) {
                  success = cb;
                },
                error: function(cb) {
                  error = cb;
                }
              };"""

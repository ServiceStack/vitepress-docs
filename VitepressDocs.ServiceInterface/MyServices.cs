using System;
using ServiceStack;
using VitepressDocs.ServiceModel;

namespace VitepressDocs.ServiceInterface
{
    public class MyServices : Service
    {
        public object Any(Hello request)
        {
            return new HelloResponse { Result = $"Hello, {request.Name}!" };
        }
    }
}

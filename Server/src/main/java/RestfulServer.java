import spark.Spark;
import spark.Request;
import spark.Response;

public class RestfulServer {
    public RestfulServer() {
        this.configureRestfulApiServer();
        this.processRestfulApiRequests();
    }

    private void configureRestfulApiServer () {
        Spark.port(8080);
        System.out.println("Server configured to listen on port 8080");
    }

    private void processRestfulApiRequests() {
        Spark.get("/", this::echoRequest);
    }

    private String echoRequest (Request request, Response response) {
        response.type("application/json");
        response.header("Access-Control-Allow-Origin", "*");
        response.status(200); //OK

        return HttpRequestToJson(request);
    }

    private String HttpRequestToJson (Request request) {
        return "{\n"
                + "\"attributes\":\""   + request.attributes() + "\",\n"
                + "}";
    }

    public static void main(String[] args) {
        RestfulServer restfulServer = new RestfulServer();
    }
}

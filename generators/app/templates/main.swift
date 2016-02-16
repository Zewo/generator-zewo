import Zewo

let router = Router { route in
    route.get("/") { _ in
        return Response(status: .OK, body: "Hello Zewo!")
    }
}

print("listening on 8080")
try Server(responder: router).start()

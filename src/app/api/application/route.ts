export async function postApplication(values: JSON) {
  const res = await fetch("http://localhost:8080/api/v1/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //"API-Key": process.env.DATA_API_KEY!,
    },
    body: JSON.stringify(values),
  });

  const data = await res.json();

  return Response.json(data);
}

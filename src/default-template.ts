
export const defaultTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="{{metaContent}}">
    <title>{{title}}</title>
</head>
{{script}}
<body>
    <main>
        <h1>{{title}}</h1>
        <p>{{description}}</p>
        {{infos}}
    </main>
</body>
</html>
`;

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniqid from "uniqid";


export async function POST(req) { 
    const data = await req.formData();
    if(data.get('file')) {
        // upload the file
        const file = data.get('file');

        const s3client = new S3Client({
            region: 'us-east-1',
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_KEY,
            }
        });

        const ext = file.name.split(".").slice(-1)[0];
        const newFileName = uniqid() + "." + ext;

        const chucks = [];
        for await (const chuck of file.stream()) {
            chucks.push(chuck);
        }
        const buffer = Buffer.concat(chucks);

        const bucket = 'silvaecom-app';
        await s3client.send(new PutObjectCommand({
            Bucket: bucket,
            Key: newFileName,
            ACL: "public-read",
            ContentType: file.type,
            Body: buffer,
        }));

        const link = 'https://'+bucket+'.s3.amazonaws.com/'+newFileName
        return Response.json(link   )
    }
    return Response.json(true);
}
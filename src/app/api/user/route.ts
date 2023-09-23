import { NextApiResponse, NextApiRequest } from 'next'
import clientPromise from '../../../../lib/mongodb'
import { NextResponse } from 'next/server'

interface reqBody {
    email: string;
    password: string;
  }

export async function POST(req: Request) {
    try {
        const client = await clientPromise
        const db = client.db('BASEDEDADOS')
        const collection = db.collection('autoescola-dbs')
        console.log('aq')

        const { email, password }: reqBody = await req.json()

        const user = {
            email,
            password
        }

        console.log(user)

        return NextResponse.json({
            error: false,
            message: 'Sucesso',
            status: 201,
            
        })
    } catch(e) {
        console.log(e)
    }
}
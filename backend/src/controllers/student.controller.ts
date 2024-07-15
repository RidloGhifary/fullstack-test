import { Request, Response } from "express"

let datas = [
    {
        id: 1,
        nama: "John Doe",
        nomor: "1234567890",
        tempat_tanggal_lahir: "Jakarta, 01-01-2000",
        umur: 23,
        alamat: "Jl. Raya No. 123",
        pekerjaan: "Programmer"
    }
];

export async function GetAllDatas(req:Request, res:Response){
    try {
        res.status(200).json({message:"Success", datas})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export async function InsertData(req:Request, res:Response){
    const {nama,nomor,tempat_tanggal_lahir, alamat, pekerjaan} = req.body

    if(!nama||!nomor||!tempat_tanggal_lahir||!alamat)
        return res.status(400).json({message:"All fields are required"})
    
    try {
        const getUmur = tempat_tanggal_lahir.split(",")[1]
        let birthDate = new Date(getUmur);
        let currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        let monthDifference = currentDate.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }

        const previousData = datas.length

        datas.push({id:previousData+1,nama,nomor,tempat_tanggal_lahir,umur:age, alamat, pekerjaan})
        res.status(200).json({message:"Success", datas})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export async function UpdateDate(req:Request, res:Response){
    const {id} = req.params
    const {nama,nomor,tempat_tanggal_lahir, alamat, pekerjaan} = req.body

    try {
        const index = datas.findIndex(data => data.id === Number(id))
        if(index === -1)
            return res.status(404).json({message:"Data not found"})

        let age:number;
        if(tempat_tanggal_lahir){
            const getUmur = tempat_tanggal_lahir.split(",")[1]
            let birthDate = new Date(getUmur);
            let currentDate = new Date();
            age = currentDate.getFullYear() - birthDate.getFullYear();
            let monthDifference = currentDate.getMonth() - birthDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
                age--;
            }
        }

        const previousData = datas[index]

        datas[index] = {
            id:previousData.id,
            nama:nama?nama:previousData.nama,
            nomor:nomor?nomor:previousData.nomor,
            tempat_tanggal_lahir:tempat_tanggal_lahir?tempat_tanggal_lahir:previousData.tempat_tanggal_lahir,
            umur:age?age:previousData.umur,
            alamat:alamat?alamat:previousData.alamat,
            pekerjaan:pekerjaan?pekerjaan:previousData.pekerjaan
        }
        res.status(200).json({message:"Success", datas})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export async function DeleteData(req:Request, res:Response){
    const {id} = req.params

    try {
        const index = datas.findIndex(data => data.id === Number(id))
        if(index === -1)
            return res.status(404).json({message:"Data not found"})

        datas.splice(index, 1)
        res.status(200).json({message:"Success", datas})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
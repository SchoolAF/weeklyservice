import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js"; // Assuming this is correctly pointing to your table template

export function isiTablePresensi(results) {
    results.data.forEach(isiRow); // Assuming results is an object with a 'data' array
}

function isiRow(value) {
    let content =
        isiTabel.replace("#NAMA#", value.biodata.nama)
            .replace("#NOHP#", value.phone_number)
            .replace("#JABATAN#", value.biodata.jabatan)
            .replace("#LOKASI#", value.location)
            .replace("#STATUS#", value.checkin)
            .replace("#HARIKERJA#", value.biodata.hari_kerja ? value.biodata.hari_kerja.join(', ') : "Hari kerja tidak tersedia")
            .replace("#JAMKERJA#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].durasi + " Jam" : "Jam kerja tidak tersedia")
            .replace("#JAMMASUK#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_masuk : "Jam masuk tidak tersedia")
            .replace("#JAMKELUAR#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_keluar : "Jam keluar tidak tersedia")
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content); // Assuming "iniTabel" is the ID of the element where you want to add content
}
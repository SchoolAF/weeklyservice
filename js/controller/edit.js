export function isiData(results) {  
    const inputMapping = [
      { id: 'nama', path: 'biodata.nama' },
      { id: 'jabatan', path: 'biodata.jabatan' },
      { id: 'hari_kerja', path: 'biodata.hari_kerja' },
      { id: 'phone_number', path: 'phone_number' },
      { id: 'location', path: 'location' },
      { id: 'latitude', path: 'latitude' },
      { id: 'longitude', path: 'longitude' },
      { id: 'checkin', path: 'checkin' },
      { id: 'jam_masuk', path: 'biodata.jam_kerja', index: 0, property: 'jam_masuk' },
      { id: 'jam_keluar', path: 'biodata.jam_kerja', index: 0, property: 'jam_keluar'  },
      { id: 'durasi', path: 'biodata.jam_kerja', index: 0, property: 'durasi'  },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
}
  
function getNestedValue(obj, path, index, property) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
    // console.log(`Value at path ${path}:`, value);
  
    if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
      return value[index][property];
    }
  
    return value;
}
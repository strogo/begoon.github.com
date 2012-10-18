function tape_file() {
var file = {
name: "RESCUE.GAM",
start: 0x0100,
end: 0x0fff,
entry: 0x0100,
image:
"\x31\x7F\x11\x0E\x1F\xCD\x09\xF8\x21\x6A\x02\xCD\x22\x06\xCD\xED\x01\x0E\x01\xCD\x0C\x02\x21\x1A\x0F\x11\x12\x21\x06\x05\x7E\xFE" +
"\x05\xD2\x3E\x01\xEB\xCD\x80\x05\xEB\xCD\x97\x01\x23\xCD\x97\x01\x23\x0E\x20\xCD\x09\xF8\xCD\x22\x06\x1C\x05\xC2\x1E\x01\x21\x18" +
"\x21\xCD\x80\x05\x21\x19\x0F\x7E\xFE\x05\xD2\x5C\x01\xCD\x97\x01\x21\xA8\x0F\xCD\x97\x01\x21\xBF\x03\xCD\x22\x06\x0E\x0C\xCD\x09" +
"\xF8\xE5\x21\xE6\x04\x1E\x07\x16\x07\xE3\x21\xDF\x04\xE3\x06\x08\x7E\x17\xDA\x91\x01\x0E\x20\xCD\x09\xF8\x05\xC2\x71\x01\x23\xE3" +
"\x23\xE3\x15\xC2\x6E\x01\xCD\x8E\x06\x1D\xC2\x67\x01\xE1\xC3\xA8\x01\xE3\x4E\xE3\xC3\x77\x01\x7E\xC6\x30\x4F\xCD\x09\xF8\x0E\x20" +
"\xCD\x09\xF8\x0E\x20\xC3\x09\xF8\x21\xA8\x03\xCD\x22\x06\xCD\x03\xF8\xFE\x50\xCA\x32\x06\xFE\x4B\xCA\x04\x02\xFE\x53\xCA\xD8\x01" +
"\xFE\x45\xC2\xA8\x01\x21\xD6\x03\xCD\x22\x06\x01\x0A\x19\xCD\x09\xF8\x05\xC2\xCE\x01\xC3\x00\xF8\x3A\x18\x0F\xFE\x07\x3E\x0C\xCA" +
"\xE4\x01\x3E\x07\x32\x18\x0F\xCD\xED\x01\xC3\xA8\x01\x21\x0E\x31\xCD\x80\x05\x3A\x18\x0F\x21\xE1\x03\xFE\x07\xCA\x22\x06\x21\xE5" +
"\x03\xC3\x22\x06\x0E\x00\xCD\x0C\x02\xC3\xA8\x01\x21\x09\x30\x11\x14\x0F\x06\x04\xC5\x0D\xCA\x20\x02\xCD\x2B\x02\xCD\x03\xF8\x12" +
"\xCD\x2B\x02\xC1\x2C\x13\x05\xC2\x14\x02\xC9\xCD\x80\x05\x01\x20\x0F\xCD\x09\xF8\x05\xC2\x31\x02\xCD\x80\x05\x1A\xFE\x7F\xCA\x4A" +
"\x02\xFE\x21\xDA\x53\x02\x4F\xC3\x09\xF8\xE5\x21\xF1\x03\xCD\x22\x06\xE1\xC9\xE5\x21\xF8\x03\x47\x05\xFA\x65\x02\x7E\xB7\x23\xC2" +
"\x5C\x02\xC3\x58\x02\xCD\x22\x06\xE1\xC9\x1B\x59\x29\x20\x77\x65\x72\x73\x69\x71\x20\x31\x2E\x30\x20\x72\x2D\x38\x36\x72\x6B\x0D" +
"\x0A\x0A\x33\x39\x30\x30\x30\x38\x20\x72\x71\x7A\x61\x6E\x78\x20\x62\x72\x61\x74\x69\x73\x6C\x61\x77\x73\x6B\x61\x71\x20\x32\x37" +
"\x0D\x0A\x72\x61\x64\x69\x6F\x74\x65\x68\x6E\x69\x7E\x65\x73\x6B\x69\x6A\x20\x69\x6E\x73\x74\x69\x74\x75\x74\x0D\x0A\x73\x6B\x62" +
"\x20\x20\x22\x44\x45\x53\x49\x47\x4E\x22\x0D\x0A\x28\x43\x29\x20\x31\x39\x38\x37\x20\x42\x4F\x4E\x59\x0D\x0A\x0A\x4D\x65\x6E\x60" +
"\x3A\x0D\x0A\x0A\x50\x20\x2D\x20\x69\x67\x72\x61\x0D\x0A\x4B\x20\x2D\x20\x70\x72\x6F\x67\x72\x61\x6D\x6D\x69\x72\x6F\x77\x61\x6E" +
"\x69\x65\x20\x6B\x6C\x61\x77\x69\x7B\x0D\x0A\x53\x20\x2D\x20\x7A\x77\x75\x6B\x0D\x0A\x45\x20\x2D\x20\x77\x79\x68\x6F\x64\x1B\x59" +
"\x29\x48\x77\x6C\x65\x77\x6F\x20\x2D\x1B\x59\x2A\x48\x77\x70\x72\x61\x77\x6F\x2D\x1B\x59\x2B\x48\x77\x77\x65\x72\x68\x20\x2D\x1B" +
"\x59\x2C\x48\x77\x6E\x69\x7A\x20\x20\x2D\x1B\x59\x2D\x48\x6F\x67\x6F\x6E\x78\x20\x2D\x20\x64\x72\x2E\x1B\x59\x2E\x48\x7A\x77\x75" +
"\x6B\x20\x20\x2D\x20\x77\x1B\x59\x2F\x43\x2D\x2B\x2D\x1B\x59\x30\x41\x49\x20\x20\x4F\x2D\x2B\x20\x6C\x75\x7E\x7B\x69\x65\x20\x73" +
"\x70\x61\x73\x61\x74\x65\x6C\x69\x3A\x1B\x59\x32\x3E\x31\x29\x1B\x59\x33\x3E\x32\x29\x1B\x59\x34\x3E\x33\x29\x1B\x59\x35\x3E\x34" +
"\x29\x1B\x59\x36\x3E\x35\x29\x00\x1B\x59\x38\x20\x77\x77\x65\x64\x69\x74\x65\x20\x64\x69\x72\x65\x6B\x74\x69\x77\x75\x3A\x00\x20" +
"\x2D\x20\x70\x6F\x73\x6C\x65\x64\x6E\x69\x6A\x20\x72\x65\x7A\x75\x6C\x78\x74\x61\x74\x00\x20\x6B\x6F\x6E\x65\x63\x20\x2E\x2E\x2E" +
"\x00\x6B\x6C\x20\x00\x79\x6B\x6C\x00\x1F\x1B\x62\x00\x1F\x1B\x61\x00\x44\x45\x4C\x45\x54\x45\x00\x46\x31\x00\x46\x32\x00\x46\x33" +
"\x00\x46\x34\x00\x5E\x44\x00\x5E\x45\x00\x5E\x46\x00\x5E\x47\x00\x4C\x45\x46\x54\x00\x5E\x4A\x00\x4C\x49\x4E\x45\x20\x46\x45\x45" +
"\x44\x00\x5E\x4B\x00\x48\x4F\x4D\x45\x00\x52\x45\x54\x55\x52\x4E\x00\x5E\x4E\x00\x5E\x4F\x00\x5E\x50\x00\x5E\x51\x00\x5E\x52\x00" +
"\x5E\x53\x00\x5E\x54\x00\x5E\x55\x00\x5E\x56\x00\x5E\x57\x00\x52\x49\x47\x48\x54\x00\x55\x50\x00\x44\x4F\x57\x4E\x00\x45\x53\x43" +
"\x41\x50\x45\x00\x5E\x5C\x00\x5E\x5D\x00\x5E\x5E\x00\x5E\x5F\x00\x53\x50\x41\x43\x45\x00\x1B\x59\x28\x20\x77\x79\x20\x6C\x75\x7E" +
"\x7B\x69\x6A\x20\x73\x70\x61\x73\x61\x74\x65\x6C\x78\x20\x20\x21\x00\x1B\x59\x2E\x2A\x77\x61\x7B\x65\x20\x69\x6D\x71\x20\x77\x6F" +
"\x6A\x64\x65\x74\x20\x77\x20\x69\x73\x74\x6F\x72\x69\x60\x20\x20\x2D\x20\x00\x1B\x59\x2A\x2F\x20\x69\x20\x77\x79\x73\x6F\x6B\x6F" +
"\x6B\x6C\x61\x73\x6E\x79\x6A\x20\x70\x69\x6C\x6F\x74\x20\x77\x65\x72\x74\x6F\x6C\x65\x74\x6F\x77\x20\x21\x00\x08\x20\x08\x00\x56" +
"\x4F\x4C\x43\x41\x4E\x4F\x82\x7C\x80\x7C\x02\x82\x7C\x84\x82\x80\x82\x06\xC2\x82\x88\x82\x80\x80\x0A\xA2\x82\x90\x82\x80\x80\x12" +
"\x92\x82\xA0\x82\x80\x80\x22\x8A\x82\xC0\x82\x80\x82\x7E\x86\x82\x80\x7C\xFE\x7C\x82\x82\x7C\xC5\x7E\x23\x86\x77\x23\x7E\x23\x4E" +
"\x89\x77\x47\x23\x7E\xC6\x01\x77\x5F\x23\x7E\xCE\x00\x77\x57\x23\x7E\x83\x77\x23\x7E\x5F\x8A\x77\x57\x23\xE5\xFE\x19\xD2\xE3\x05" +
"\x78\xFE\x40\xD2\xE3\x05\x7B\x69\xCD\xA0\x05\x7E\xFE\x2A\xC2\x78\x05\x36\x20\x6B\x61\xCD\x80\x05\x0E\x20\xCD\x09\xF8\x68\x7A\xCD" +
"\xA0\x05\x7E\xFE\x2D\xCA\x7B\x05\xFE\x4F\xCA\x27\x0C\x0E\x2A\x71\x6A\x60\xCD\x80\x05\xCD\x09\xF8\xE1\xC1\xC9\x0E\x2B\xC3\x6F\x05" +
"\xC5\x0E\x1B\xCD\x09\xF8\x0E\x59\xCD\x09\xF8\x3E\x20\x85\x4F\xCD\x09\xF8\x3E\x20\x84\x4F\xCD\x09\xF8\xC1\xC9\xCD\x80\x05\x7D\x6C" +
"\xD5\x0F\x0F\x67\xE6\xC0\xB5\x6F\x3E\x3F\xA4\x67\x11\x7F\x11\x19\xD1\xC9\xC5\x3E\x03\xCD\xF7\x05\x4F\xC6\x25\x57\x3E\xFF\xCD\xF7" +
"\x05\x5F\xE6\xFC\xB1\x0F\x0F\xD6\x80\x4F\x9F\x71\x23\x73\x23\x77\x23\x72\x23\xA9\xD6\x83\x77\x23\x36\xFF\x23\x36\x00\x23\x36\x08" +
"\x23\xC1\xC9\xD5\x11\xF8\xFF\x19\xCD\xB2\x05\x42\xD1\x16\x08\x7B\x69\xCD\xA0\x05\xC3\x51\x05\xD5\xE5\x57\x2A\x97\x0F\x3E\x1F\xA4" +
"\x67\x3A\x99\x0F\x86\x82\x32\x99\x0F\x5F\x19\x23\x22\x97\x0F\x3E\xFF\xC3\x16\x06\x7C\x1F\x67\xA3\xBA\xCA\x1F\x06\xD2\x14\x06\xE1" +
"\xD1\xC9\xC5\xC3\x2A\x06\x4F\xCD\x09\xF8\x7E\xB7\x23\xC2\x26\x06\xC1\xC9\x21\xED\x03\xCD\x22\x06\x21\x09\x00\xCD\x80\x05\x21\x7F" +
"\x11\x11\x40\x06\x36\x20\x23\x1B\x7A\xB3\xC2\x44\x06\x21\x0A\x0E\x11\xBF\x13\xD5\x7E\x47\x23\xB7\xCA\x98\x06\xFA\x72\x06\x7E\x23" +
"\xB7\xCA\x81\x06\x4F\x79\x12\xCD\x09\xF8\x13\x05\xC2\x65\x06\xC3\x54\x06\x7E\x23\xB7\xCA\x54\x06\x4F\x12\xCD\x09\xF8\x13\xC3\x72" +
"\x06\xCD\x8E\x06\xD1\xEB\x01\x40\x00\x09\xEB\xC3\x53\x06\x0E\x0D\xCD\x09\xF8\x0E\x0A\xC3\x09\xF8\xD1\x21\xB7\x0F\x22\xA6\x0F\x06" +
"\x0A\x36\x00\x11\x04\x00\x19\x05\xC2\xA1\x06\x21\x11\x39\x22\xA4\x0F\x21\xDF\x0F\x06\x14\xCD\xB2\x05\xE5\x3E\x08\x6A\xCD\xA0\x05" +
"\x36\x2A\x2E\x08\x62\xCD\x80\x05\x0E\x2A\xCD\x09\xF8\xE1\x05\xC2\xB6\x06\x3E\xFF\x32\xA2\x0F\x3E\x0A\x32\xAE\x0F\x3E\x10\x32\xAD" +
"\x0F\xAF\x32\xAC\x0F\x32\x19\x0F\x3E\x03\x32\xA8\x0F\x3E\x07\x32\xA9\x0F\x31\x7F\x11\xCD\x12\xF8\xB7\xCA\xFF\x06\xCD\x03\xF8\xAF" +
"\x32\x9F\x0F\x32\xA0\x0F\x3A\xA8\x0F\x3D\xFA\x96\x0A\x32\xA8\x0F\x87\xC6\x14\x6F\x26\x3A\xCD\x9B\x05\x16\x20\xAF\xCD\x1D\x0A\x21" +
"\xCA\x0D\xCD\x22\x06\x21\x0F\x3A\x22\x9C\x0F\xCD\x9B\x05\x16\x4F\xAF\xCD\x1D\x0A\x21\xEA\x0D\xCD\x22\x06\xCD\x68\x0D\x21\xB7\x0F" +
"\x06\x0A\xCD\x69\x0B\x05\xC2\x42\x07\x21\xDF\x0F\x06\x14\xCD\x17\x05\x05\xC2\x4E\x07\x21\xB7\x0F\x06\x0A\xCD\x69\x0B\x05\xC2\x5A" +
"\x07\x2A\xA2\x0F\x7D\xB7\xFA\x9F\x07\xEB\x6A\xCD\xA0\x05\x36\x20\x01\x40\x00\x09\x7E\xFE\x20\xC2\x74\x08\x36\x59\xEB\xCD\x80\x05" +
"\x0E\x20\xCD\x09\xF8\x0E\x1A\xCD\x09\xF8\x0E\x08\xCD\x09\xF8\x7D\x0F\x0E\x4C\xDA\x98\x07\x0E\x4A\xCD\x09\xF8\x2C\x22\xA2\x0F\xCD" +
"\x04\x09\x3A\xAC\x0F\xB7\xCA\xC0\x07\x47\x21\xAF\x0F\x5E\x23\x56\x23\xEB\xCD\x80\x05\x21\xC7\x0D\xCD\x22\x06\xEB\x05\xC2\xAD\x07" +
"\x3A\xA9\x0F\x3D\x32\xA9\x0F\xC2\x3D\x07\x21\x16\x03\xCD\xF0\x08\x21\x14\x0A\xCD\xF0\x08\x21\x11\x13\xCD\xF0\x08\x21\x0D\x1C\xCD" +
"\xF0\x08\x3E\x07\x32\xA9\x0F\x3A\xAC\x0F\xB7\xCA\xF9\x07\x47\x21\xAF\x0F\xCD\xF7\x0C\x05\xC2\xF2\x07\x3A\xAE\x0F\x3D\xC2\x05\x08" +
"\xCD\x2F\x08\x3E\x0A\x32\xAE\x0F\x3A\xA0\x0F\xB7\xCA\x3D\x07\x47\x3A\xA1\x0F\x3D\x32\xA1\x0F\xCA\xDD\x08\xFE\x0A\xD2\x3D\x07\x78" +
"\xFE\x4A\x3E\x4C\xCA\x29\x08\x3E\x4A\x32\xA0\x0F\xC3\x3D\x07\x3A\xAD\x0F\x3D\xF8\x32\xAD\x0F\x47\x87\x87\x80\x5F\x16\x00\x21\x74" +
"\x0D\x19\x46\x23\x5E\x23\x56\xEB\xCD\x9B\x05\x0E\x2B\xCD\x09\xF8\x71\x23\x05\xC2\x4D\x08\xCD\x68\x0D\xEB\x23\x7E\xB7\xC8\x23\x56" +
"\x5F\x6A\xCD\xA0\x05\x7E\xFE\x59\xCA\x6E\x08\xFE\x49\xC0\x36\x20\xEB\xC3\x94\x08\xCD\x68\x0D\xEB\xFE\x59\xCC\x8D\x08\xFE\x49\xCC" +
"\x8D\x08\x3E\xFF\x32\xA2\x0F\xCD\x94\x08\xC3\x9F\x07\xEB\x36\x20\xEB\xC3\x94\x08\xC5\xCD\xBF\x0C\xCD\xDB\x0C\xCD\xA0\x08\xC1\xC9" +
"\xE5\xEB\x3A\xAC\x0F\x3C\x32\xAC\x0F\x3D\x87\x4F\x06\x00\x7B\x6A\xCD\xA0\x05\x23\x7E\xFE\x20\xCA\xBB\x08\x15\x21\xAF\x0F\x09\x73" +
"\x23\x72\xEB\xCD\x80\x05\x21\xC7\x0D\xCD\x22\x06\xCD\x68\x0D\x3A\xAC\x0F\x21\x19\x0F\x86\xE1\xFE\x04\xC0\xC3\x96\x0A\xAF\x32\xA0" +
"\x0F\x2A\x9C\x0F\x2C\x22\xA2\x0F\xCD\x9E\x05\x36\x59\xC3\x3D\x07\xCD\x9B\x05\x7E\x0E\x59\xFE\x49\xCA\x00\x09\x0E\x49\xFE\x59\xC0" +
"\x71\xC3\x09\xF8\x3A\x9F\x0F\x32\x9E\x0F\x2A\x9C\x0F\x22\x9A\x0F\xEB\x01\x00\x00\xCD\x12\xF8\xB7\xCA\x52\x09\xCD\x03\xF8\x21\x14" +
"\x0F\xBE\xCA\xED\x09\x23\xBE\xCA\x49\x09\x23\xBE\xCA\xE6\x09\x23\xBE\xCA\xF5\x09\x2A\xA6\x0F\x7E\xB7\xC0\x3A\x9E\x0F\x2F\x47\xF6" +
"\x01\x77\x23\x70\x23\x73\x23\x72\xC9\x14\x01\x01\x00\x3E\xFF\x32\x9F\x0F\x7A\x3D\xFE\x3D\xD0\x7B\xB7\xC8\xEB\x22\x9C\x0F\x2A\x9A" +
"\x0F\xCD\x9E\x05\xE5\x16\x20\x3A\x9E\x0F\xCD\x1D\x0A\xE1\x09\xE5\x3A\x9F\x0F\xB7\x3E\x20\xC2\x38\x0A\xCD\x48\x0A\xC2\xF2\x0B\x11" +
"\xBD\xFF\x19\xCD\x48\x0A\xC2\xF2\x0B\x11\x7F\x00\x19\x3A\xA0\x0F\x47\xB7\xCA\x50\x0A\x7E\xFE\x20\xC2\xF2\x0B\x11\x40\x00\x19\x7E" +
"\xFE\x3D\xCC\x70\x0A\xE1\x16\x4F\x3A\x9F\x0F\xCD\x1D\x0A\x2A\x9A\x0F\xCD\x80\x05\x3A\x9E\x0F\xB7\x21\xCA\x0D\xC4\x68\x0A\xCD\x22" +
"\x06\x05\xFA\xCA\x09\x0E\x20\xCD\x09\xF8\x2A\x9C\x0F\xCD\x80\x05\x3A\x9F\x0F\xB7\x21\xEA\x0D\xC4\x6C\x0A\xCD\x22\x06\x3A\xA0\x0F" +
"\xB7\xC8\x4F\xC3\x09\xF8\x1D\x01\xC0\xFF\xC3\x52\x09\x15\x01\xFF\xFF\xAF\xC3\x4F\x09\x01\x40\x00\x1C\x7B\x6A\xCD\xA0\x05\x7E\xFE" +
"\x3D\xC2\x52\x09\x1D\x0E\x00\xC3\x52\x09\x77\x23\x77\x23\x77\xC9\x11\xFE\xFF\x19\xCD\x0A\x0A\x11\xBF\xFF\xC3\x28\x0A\xB7\x7A\xC2" +
"\x10\x0A\xCD\x0A\x0A\x11\xBD\xFF\x19\xCD\x0A\x0A\x11\x7F\x00\x19\x57\x3A\xA0\x0F\xB7\xC8\x72\xC9\x11\xFE\xFF\x19\xCD\x48\x0A\xC2" +
"\xF2\x0B\x11\xBF\xFF\xC3\x82\x09\xBE\xC0\x23\xBE\xC0\x23\xBE\xC9\x7E\xFE\x49\xCA\x5B\x0A\xFE\x59\xC2\xA5\x09\x3E\x49\x32\xA0\x0F" +
"\x3E\x28\x32\xA1\x0F\xC3\xA5\x09\x21\xDA\x0D\xC9\x21\xFA\x0D\xC9\x2A\xA4\x0F\x24\x22\xA4\x0F\x25\xCD\x9B\x05\x0E\x49\x71\xCD\x09" +
"\xF8\xCD\x68\x0D\xAF\x32\xA0\x0F\x3A\x19\x0F\x3C\x32\x19\x0F\x21\xAC\x0F\x86\xFE\x04\xC0\x31\x7F\x11\x21\xE9\x03\xCD\x22\x06\x3A" +
"\x19\x0F\xB7\xCA\x00\x01\xFE\x04\xC2\xBF\x0A\x21\x76\x04\xCD\x22\x06\x3A\xA8\x0F\xFE\x03\xC2\xBF\x0A\x21\xB3\x04\xCD\x22\x06\x21" +
"\x1A\x0F\x06\x05\x3A\x19\x0F\xBE\xCA\xDF\x0A\xD2\xEB\x0A\x7E\xFE\x05\xD2\x5F\x0B\x11\x19\x00\x19\x05\xC2\xC4\x0A\xC3\x00\x01\x3A" +
"\xA8\x0F\x23\xBE\x2B\xCA\xD4\x0A\xDA\xD4\x0A\x05\xE5\x21\x7D\x0F\x11\x96\x0F\x0E\x19\x7E\x12\x2B\x1B\x0D\xC2\xF5\x0A\x05\xC2\xF3" +
"\x0A\xE1\xE5\x06\x18\x36\x20\x23\x05\xC2\x05\x0B\x36\x00\x21\x91\x04\xCD\x22\x06\xE1\x3A\x19\x0F\x77\x23\x3A\xA8\x0F\x77\x23\x06" +
"\x00\xCD\x03\xF8\x4F\xFE\x08\xCA\x43\x0B\xFE\x0D\xCA\x00\x01\xFE\x20\xDA\x57\x0B\x78\xFE\x17\xCA\x57\x0B\x04\x71\x23\xCD\x09\xF8" +
"\xC3\x21\x0B\x78\xB7\xCA\x57\x0B\x05\x2B\x36\x20\xEB\x21\xDB\x04\xCD\x22\x06\xEB\xC3\x21\x0B\x0E\x07\xCD\x09\xF8\xC3\x21\x0B\xE5" +
"\x11\x19\x00\x19\x36\xFF\xC3\x01\x0B\xC5\x4E\x23\x46\x23\x5E\x23\x56\xE5\x79\xB7\xCA\xD5\x0B\xEB\xCD\x80\x05\xEB\x6A\x7B\xCD\xA0" +
"\x05\x7E\xFE\x4F\xCA\xE3\x0B\x36\x20\xC5\x0E\x20\xCD\x09\xF8\xC1\xFE\x2D\xC2\xD5\x0B\x7A\x81\xFE\x40\xD2\xD5\x0B\x57\x09\x0D\xCA" +
"\xAA\x0B\x0E\x08\xCD\x09\xF8\xCD\x09\xF8\x7E\xFE\x4F\xCA\x27\x0C\xFE\x2A\xCA\xED\x0B\xFE\x49\xCA\xCF\x0B\xFE\x59\xCA\xCF\x0B\xFE" +
"\x20\xC2\xD5\x0B\x0E\x2D\x71\xCD\x09\xF8\xE1\x72\x23\xC1\xC9\x36\x20\xEB\xCD\x94\x08\x21\xFD\xFF\xD1\x19\x36\x00\x22\xA6\x0F\xEB" +
"\xC3\xCC\x0B\xC5\x0E\x18\xCD\x09\xF8\xC1\xC3\x95\x0B\x0E\x2B\xC3\xC6\x0B\x7E\x06\x00\xFE\x49\xCA\xFF\x0B\xFE\x59\xC2\x1E\x0C\x36" +
"\x20\x3A\x9C\x0F\x2F\xC6\x18\x57\x87\x87\x82\x4F\x21\x77\x0D\x09\x5E\x23\x56\xEB\xCD\x80\x05\x0E\x20\xCD\x09\xF8\x06\xFF\x2A\x9A" +
"\x0F\x3A\x9E\x0F\xC3\x2F\x0C\x2A\x9C\x0F\x3A\x9F\x0F\x06\x00\xC5\x47\xCD\x80\x05\xEB\x78\xB7\x21\xCA\x0D\xC4\x68\x0A\xCD\x22\x06" +
"\x3A\xA0\x0F\xB7\xCA\x4C\x0C\x0E\x20\xCD\x09\xF8\x7B\x6A\xCD\xA0\x05\x16\x20\x78\xCD\x1D\x0A\xCD\x68\x0D\x2A\x9C\x0F\xCD\xBF\x0C" +
"\xC1\x3A\xA0\x0F\xB0\xCA\xF2\x06\xCD\xDB\x0C\x2A\x9A\x0F\xCD\xA0\x08\xC3\xF2\x06\x7C\x87\x67\x19\x7C\xFE\x40\xD0\x7D\xFE\x19\xD0" +
"\xCD\x9B\x05\x7E\xFE\x4F\xC8\xC5\x79\xB7\xCC\xBD\x0C\xCD\x09\xF8\xC1\xC9\xC5\xCD\xAC\x0C\x78\x2F\x3C\x67\x68\xCD\x74\x0C\x78\x2F" +
"\x3C\x6F\x60\x47\xCD\x74\x0C\xCD\xAC\x0C\xC1\xC9\x60\x2E\x00\xCD\x74\x0C\x68\x60\xCD\x74\x0C\x26\x00\x68\xC3\x74\x0C\x4E\xC9\xEB" +
"\x06\x00\x0E\x2E\xCD\x92\x0C\x3E\xFF\x3D\xC2\xC9\x0C\x0E\x00\xCD\x92\x0C\x04\x78\xFE\x20\xC2\xC2\x0C\xEB\xC9\xEB\x06\x20\x0E\x2E" +
"\xCD\x92\x0C\x21\x00\x02\x2B\x7C\xB5\xC2\xE6\x0C\x0E\x00\xCD\x92\x0C\x05\xF2\xDE\x0C\xEB\xC9\xC5\x5E\x4B\x3E\x02\xCD\xF7\x05\x3D" +
"\xEA\x0A\x0D\x3A\x9C\x0F\xBB\x9F\xF6\x01\x83\xFE\x19\xD2\x11\x0D\x4F\x23\x56\x42\x3E\x01\xCD\xF7\x05\xB7\xCA\x24\x0D\x3A\x9D\x0F" +
"\xBA\x9F\xF6\x01\x82\xFE\x3F\xD2\x2B\x0D\x47\xE5\x79\x68\xCD\xA0\x05\x7E\xFE\x4F\xCA\x27\x0C\xFE\x20\xC2\x48\x0D\x23\x7E\xFE\x4F" +
"\xCA\x27\x0C\xFE\x20\xCA\x4A\x0D\x42\x4B\xE1\xEB\xCD\x80\x05\x21\xC4\x0D\xCD\x22\x06\x69\x60\xCD\x80\x05\x21\xC7\x0D\xCD\x22\x06" +
"\xEB\x70\x2B\x71\x23\x23\xC1\xC9\xF5\xC5\x3A\x18\x0F\x4F\xCD\x09\xF8\xC1\xF1\xC9\x37\x18\x00\x00\x00\x35\x17\x02\x16\x03\x30\x16" +
"\x07\x00\x00\x2E\x15\x09\x14\x0A\x29\x14\x0E\x00\x00\x25\x13\x10\x00\x00\x22\x12\x12\x11\x13\x1C\x11\x17\x00\x00\x18\x10\x19\x00" +
"\x00\x16\x0F\x1A\x00\x00\x14\x0E\x1B\x0D\x1C\x0D\x0D\x20\x00\x00\x0B\x0C\x21\x00\x00\x09\x0B\x22\x00\x00\x07\x0A\x23\x00\x00\x04" +
"\x09\x25\x00\x00\x20\x20\x00\x28\x29\x00\x20\x20\x20\x19\x08\x08\x08\x08\x20\x20\x20\x1A\x1A\x08\x08\x00\x08\x08\x20\x20\x20\x19" +
"\x08\x08\x20\x20\x20\x1A\x1A\x08\x08\x00\x4F\x2D\x2B\x19\x08\x08\x08\x08\x2D\x2B\x2D\x1A\x1A\x08\x08\x00\x08\x08\x2B\x2D\x4F\x19" +
"\x08\x08\x2D\x2B\x2D\x1A\x1A\x08\x08\x00\x25\x20\x04\x58\x01\x00\x23\x20\x01\x58\x01\x58\x04\x20\x01\x58\x01\x00\x22\x20\x01\x58" +
"\x07\x20\x01\x58\x01\x00\x21\x20\x01\x58\x09\x20\x01\x58\x01\x00\x1C\x20\x01\x59\x03\x20\x01\x58\x0B\x20\x01\x58\x01\x00\x1B\x20" +
"\x04\x58\x01\x58\x0D\x20\x01\x58\x01\x58\x01\x00\x1A\x20\x01\x58\x14\x20\x01\x58\x01\x00\x19\x20\x01\x58\x16\x20\x01\x58\x06\x20" +
"\x08\x3D\x01\x00\x13\x20\x01\x49\x03\x20\x01\x58\x01\x58\x18\x20\x01\x58\x01\x58\x04\x20\x01\x21\x06\x20\x01\x21\x01\x00\x12\x20" +
"\x04\x58\x01\x58\x1C\x20\x01\x58\x03\x20\x01\x21\x06\x20\x01\x21\x01\x00\x10\x20\x01\x58\x01\x58\x22\x20\xFF\x58\x20\x20\x21\x20" +
"\x2D\x2B\x2D\x20\x20\x21\x00\x01\x00\x0A\x20\x01\x59\x03\x20\x01\x58\x01\x58\x25\x20\xFF\x58\x58\x21\x20\x20\x4F\x2D\x2B\x20\x21" +
"\x00\x01\x00\x09\x20\x04\x58\x01\x58\x29\x20\xFF\x21\x20\x2D\x2B\x2D\x20\x20\x21\x00\x01\x00\x03\x20\x01\x49\x03\x20\x01\x58\x01" +
"\x58\x2E\x20\xFF\x21\x20\x20\x4F\x2D\x2B\x20\x21\x00\x01\x00\x02\x20\x04\x58\x01\x58\x30\x20\xFF\x21\x20\x2D\x2B\x2D\x20\x20\x21" +
"\x00\x01\x00\x01\x58\x01\x58\x35\x20\xFF\x21\x20\x20\x4F\x2D\x2B\x20\x21\x00\x00\x08\x18\x19\x1A\x07\xFF\xFF\x00\x00\x00\x00\x00" +
"\x32\xB7\xC2\xF6\x19\x3A\xEF\x14\xFE\x05\xCA\x04\x14\xFE\x0C\xCA\x04\x14\x3A\x0C\x01\xB7\xCA\x04\x14\x3A\x26\x3B\x3D\x6F\x26\x00" +
"\x3A\xFA\x3A\x3C\x4F\xCD\x40\x1C\x7B\x32\xD1\x32\x3A\xFB\x3A\x4F\x3A\x12\x3B\xA1\x4F\x45\x21\x16\x3B\xCA\xBC\x13\x3E\x10\xB7\x1F" +
"\x0D\xC2\xB4\x13\x80\x47\x05\xFA\xCB\x13\x23\xCD\x52\x13\xCA\xBC\x13\x23\xC3\xBC\x13\x7E\x5E\x32\x0A\x34\xCD\x52\x13\x57\xCA\xD9" +
"\x22\x4F\x13\x2A\x4F\x13\xEB\x21\x15\x1B\x19\x5E\x16\x00\xD5\x21\x30\x00\xD1\x7B\x95\x6F\x7A\x9C\x67\xE5\x21\x01\x00\xD1\x19\xE5" +
"\x21\x09\x00\xE5\xCD\xEF\x02\xF1\xD2\xFD\x0F\x2A\x4F\x13\xE5\x21\x30\x00\xE5\xC1\xE1\xEB\x21\x15\x1B\x19\x71\x2A\x4F\x13\xE5\x21" +
"\x01\x00\xD1\x7B\x95\x6F\x7A\x9C\x67\xE5\x2A\x3B\x13\xE5\xCD\xBC\x02\xF1\xD2\xE9\x0F\x2A\x4F\x13\xE5\x21\x02\x00\xD1\x7B\x95\x6F" +
"\x7A\x9C\x67\x22\x4F\x13\xC3\xFA\x0F\x2A\x4F\x13\xE5\x21\x01\x00\xD1\x7B\x95\x6F\x7A\x9C\x67\x22\x4F\x13\xC3\x83\x0F\x2A\x4F\x13"};
ui.file_loaded(file);
}
tape_file();
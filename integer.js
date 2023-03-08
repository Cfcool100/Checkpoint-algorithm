function permutation(x, y, z) {
    var t;
    
    t = z;
    z = y;
    y = x;
    x = t;
    console.log(x,y,z);
}
permutation(05, 03, 09);
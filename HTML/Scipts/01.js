function fndemo()
{
    var result=confirm('Are you Sure???')
    if(result==true)
    {
        window.close()
    }
    else{
        window.location="http://www.google.co.in/"
    }
}
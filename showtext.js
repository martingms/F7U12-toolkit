var faces = $("a");
for (i = 0; i < faces.length; i++)
{
    if (faces[i].title && !faces[i].innerHTML)
    {
        faces[i].innerHTML = "( " + faces[i].title + " )"
    }

}

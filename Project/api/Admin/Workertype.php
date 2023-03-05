<?php

include("../Connection.php");

    if(isset($_POST["workertype"]))

    {
    $Workertype=$_POST["workertype"];


    $insQry = "insert into tbl_workertype(workertype_name)values('".$Workertype."')";
    if($Conn->query($insQry))
    {
        echo"Inserted";
    }

    else{
        echo "Failed";
    }


}

if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $selQry = "select * from tbl_workertype";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    }


    if($_SERVER['REQUEST_METHOD']=="DELETE")
    { 
        $delQry = "delete from tbl_workertype where workertype_id='".$_GET["delid"]."'";
        if($Conn->query($delQry))
            {
                echo "Delete";
            }

            else{
                echo "Failed";
            }
    
    }

    if($_SERVER['REQUEST_METHOD']=="PUT")
    { 
        $upQry = "update tbl_workertype set workertype_name='".$_GET["workertype"]."' where workertype_id='".$_GET["id"]."'";
        if($Conn->query($upQry))
            {
                echo "Updated";
            }
            else
            {
                echo "Failed";
            }
    
    }

?>
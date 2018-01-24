    <?php
        $baglanti = @mysql_connect('localhost', 'root','');
        $veritabani = @mysql_select_db('emresertnet');
        $name = htmlspecialchars($_POST['firstname']); 
        $sname = htmlspecialchars($_POST['surname']);
        $email = htmlspecialchars($_POST['email']);
        $message =htmlspecialchars($_POST['message']);
        $issue = htmlspecialchars($_POST['subject']);
        $send = "Gönderenin Adı Soyadı : $name <br> Gönderenin Mail Adresi : $email <br> Konu: $issue <br><br> Mesaj : $message <br>";
        $header = "From : $email\r\n"."Content-Type: text/html; Charset=iso-8859-9\r\n";
        
        mail("emresert1233@gmail.com",$issue,$message,$header);
        echo "Sayın "."<b>{$name} {$sname}".'</b>' ." mesajınız başarılı bir şekilde alınmıştır "."<br>";
        echo "<a href=\"http://www.emresert.tk\">Anasayfa</a><br>";
        mysql_query("INSERT INTO `mail` (`id`, `kadi`, `ksoyadi`, `kmail`, `kmesaj`, `mkonu`) VALUES (NULL, '$name', '$sname', '$email', '$message','$issue')");
        
        
        $query=(mysql_query("select * from mail m order by m.id desc limit 10"));
        
        echo "<br><b>EN SON İLETİŞİME GEÇEN KİŞİLER </b><br><hr/>";
        while($read=mysql_fetch_array($query)){
        echo $read['kadi']." ".$read['ksoyadi']."<b> Konu:</b>"." ".$read['mkonu']."<hr/>";}
        
        mysql_close($baglanti);
    ?>
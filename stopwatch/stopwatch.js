<html>
<head>
    <title>Digital Clock with Stopwatch</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"></link>
</head>
<body style="background-color: black; color: white; text-align: center; padding-top: 20vh; font-size: 3rem;">
    <div id="clock">00:00:00</div>
    <div class="mt-3">
        <button id="startBtn" class="btn btn-primary">Start Stopwatch</button>
        <button id="stopBtn" class="btn btn-danger">Stop Stopwatch</button>
    </div>

    <script>
        let timer;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
      
        function displayTime() {
            document.getElementById("clock").textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        }
      
        function startStopwatch() {
            timer = setInterval(() => {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
                displayTime();
            }, 1000)
        }
      
        function stopStopwatch() {
            clearInterval(timer)
        }
      
        document.getElementById("startBtn").addEventListener("click", startStopwatch);
        document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
    </script>

   {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script> */}
</body>
</html>
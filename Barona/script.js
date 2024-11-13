// Configura la conexión MQTT
const client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt'); // Cambia esto a tu servidor MQTT

client.on('connect', () => {
    console.log('Conectado al servidor MQTT');
});

function toggleDoor() {
    // Publicar un mensaje al tema que controla la puerta
    client.publish('garage/door', 'toggle');
    console.log('Mensaje enviado para abrir/cerrar la puerta');
}
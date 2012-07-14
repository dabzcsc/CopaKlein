/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ $Id:
 * ServletTemplate.java,v 1.2 2008/06/16 01:04:26 jua-gome Exp $ Universidad de
 * los Andes (Bogot� - Colombia) Departamento de Ingenier�a de Sistemas y
 * Computaci�n Licenciado bajo el esquema Academic Free License version 2.1
 *
 *
 */
package copaKlein.interfaz;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servelt Abstracto principal con el template del dise�o de la p�gina
 */
@SuppressWarnings("serial")
public abstract class ServletTemplate extends HttpServlet {

    // -----------------------------------------------------------------
    // M�todos
    // -----------------------------------------------------------------
    /**
     * Maneja un pedido GET de un cliente
     *
     * @param request Pedido del cliente
     * @param response Respuesta
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        procesarPedido(request, response);
    }

    /**
     * Maneja un pedido POST de un cliente
     *
     * @param request Pedido del cliente
     * @param response Respuesta
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        procesarPedido(request, response);
    }

    /**
     * Procesa el pedido de igual manera para todos
     *
     * @param request Pedido del cliente
     * @param response Respuesta
     * @throws IOException Excepci�n de error al escribir la respuesta
     */
    private void procesarPedido(HttpServletRequest request, HttpServletResponse response) throws IOException {
        //
        // Comienza con el Header del template
        imprimirHeader(request, response);
        //
        // Escribe el contenido de la p�gina
        escribirContenido(request, response);
        //
        // Termina con el footer del template
        imprimirFooter(response);

    }

    /**
     * Imprime el Header del dise�o de la p�gina
     *
     * @param request Pedido del cliente
     * @param response Respuesta
     * @throws IOException Excepci�n al imprimir en el resultado
     */
    private void imprimirHeader(HttpServletRequest request, HttpServletResponse response) throws IOException {
        //
        // Saca el printer de la repuesta
        PrintWriter respuesta = response.getWriter();
        //

        // Imprime el header
        respuesta.println("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">");
        respuesta.println("<html xmlns=\"http://www.w3.org/1999/xhtml\">");
        respuesta.println("<link rel=\"icon\" href=\"favicon.png\" type=\"image/png\" />");
        respuesta.println("<link rel=\"image_src\" href=\"thumbnail.jpg\" />");
        respuesta.println("<meta property=\"og:title\" content=\"Copa Klein\" />");
        respuesta.println("<meta property=\"og:description\" content=\"Equipos, horario y posiciones de la Copa Klein - Departamento de Matemáticas\" />");
        respuesta.println("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />");
        respuesta.println("<head>");
        respuesta.println(" <!--Adobe Edge Runtime-->");
        respuesta.println("    <script type=\"text/javascript\" charset=\"utf-8\" src=\"htmate_edgePreload.js\"></script>");
        respuesta.println("    ");
        respuesta.println("    <style>");
        respuesta.println("        .edgeLoad-EDGE-47503245 { display:none; }");
        respuesta.println("    </style>");
        respuesta.println("  <!--Adobe Edge Runtime End-->");
        respuesta.println("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />");
        respuesta.println("<title>Copa Klein - " + darTituloPagina(request) + "</title>");
        respuesta.println("<style type=\"text/css\">");
        respuesta.println("body,td,th {");
        respuesta.println("	color: #999;");
        respuesta.println("	font-family: Arial, Helvetica, sans-serif;");
        respuesta.println("	font-size: 10px;");
        respuesta.println("}");
        respuesta.println("body {");
        respuesta.println("	background-color: #262626;");
        respuesta.println("}");
        respuesta.println("</style>");
        respuesta.println("</head>");
        respuesta.println("");
        respuesta.println("<body bgcolor=\"#000000\" text=\"#FFFFFF\">");
    }

    /**
     * Imprime el Footer del dise�o de la p�gina
     *
     * @param response Respuesta
     * @throws IOException Excepci�n al escribir en la respuesta
     */
    private void imprimirFooter(HttpServletResponse response) throws IOException {
        //
        // Saca el writer de la respuesta
        PrintWriter respuesta = response.getWriter();
        //
        // Imprime el footer
        respuesta.println("</body>");
        respuesta.println("</html>");
        respuesta.println("<p></p>");
        respuesta.println("<center>");
        respuesta.println("Copyright - Universidad de los Andes - Departamento de Matemáticas - Facultad de Ciencia<br />");
        respuesta.println("Edificio H. Teléfono: (571) 3394949 Ext. 2716. Fax (571) 3324427");
        respuesta.println("</center>");
    }

    /**
     * Imprime un mensaje de error
     *
     * @param respuesta Respuesta al cliente
     * @param titulo T�tulo del error
     * @param mensaje Mensaje del error
     */
    protected void imprimirMensajeError(PrintWriter respuesta, String titulo, String mensaje) {
        respuesta.write("                      <p class=\"error\"><b>Ha ocurrido un error!:<br>\r\n");
        respuesta.write("                      </b>" + titulo + "</p><p>" + mensaje + ". </p>\r\n");
        respuesta.write("                      <p>Intente la \r\n");
        respuesta.write("                      operaci�n nuevamente. Si el problema persiste, contacte \r\n");
        respuesta.write("                      al administrador del sistema.</p>\r\n");
        respuesta.write("                      <p><a href=\"index.htm\">Volver a la p�gina principal</a>\r\n");
    }

    /**
     * Imprime un mensaje de error
     *
     * @param respuesta Respuesta al cliente
     * @param titulo T�tulo del error
     * @param exception Excepci�n de error
     * @param mensaje Mensaje del error
     */
    protected void imprimirMensajeError(PrintWriter respuesta, String titulo, String mensaje, Exception exception) {
        respuesta.write("                      <p class=\"error\"><b>Ha ocurrido un error!:<br>\r\n");
        respuesta.write("                      </b>" + titulo + "</p><p>" + mensaje + ". Mas Informaci�n:<br>");
        exception.printStackTrace(respuesta);
        respuesta.write("</p>\r\n");
        respuesta.write("                      <p>Intente la \r\n");
        respuesta.write("                      operaci�n nuevamente. Si el problema persiste, contacte \r\n");
        respuesta.write("                      al administrador del sistema.</p>\r\n");
        respuesta.write("                      <p><a href=\"index.htm\">Volver a la p�gina principal</a>\r\n");
    }

    /**
     * Imprime un mensaje de �xito
     *
     * @param respuesta Respuesta al cliente
     * @param titulo T�tulo del mensaje
     * @param mensaje Contenido del mensaje
     */
    protected void imprimirMensajeOk(PrintWriter respuesta, String titulo, String mensaje) {
        respuesta.write("                      <p class=\"ok\"><b>Operaci�n exitosa:<br>\r\n");
        respuesta.write("                      </b>" + titulo + "</p><p>" + mensaje + ". </p>\r\n");
        respuesta.write("                      <p><a href=\"index.htm\">Volver a la p�gina principal</a>\r\n");
    }

    // -----------------------------------------------------------------
    // M�todos Abstractos
    // -----------------------------------------------------------------
    /**
     * Devuelve el t�tulo de la p�gina para el Header
     *
     * @param request Pedido del cliente
     * @return T�tulo de la p�gina para el Header
     */
    public abstract String darTituloPagina(HttpServletRequest request);

    /**
     * Devuelve el nombre de la imagen para el t�tulo de la p�gina en el Header
     *
     * @param request Pedido del cliente
     * @return Nombre de la imagen para el t�tulo de la p�gina en el Header
     */
    public abstract String darImagenTitulo(HttpServletRequest request);

    /**
     * Escribe el contenido de la p�gina
     *
     * @param request Pedido del cliente
     * @param response Respuesta
     * @throws IOException Excepci�n de error al escribir la respuesta
     */
    public abstract void escribirContenido(HttpServletRequest request, HttpServletResponse response) throws IOException;
}

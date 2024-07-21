# Postgres Deployment
resource "kubernetes_deployment" "postgres" {
  metadata {
    name = "postgres"
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "postgressvc"
      }
    }

    template {
      metadata {
        labels = {
          app = "postgressvc"
        }
      }

      spec {
        container {
          name  = "postgres"
          image = "cloudservos2607/postgres:latest"

          port {
            container_port = 5432
          }

          env {
            name  = "POSTGRES_USER"
            value = "myuser"
          }

          env {
            name  = "POSTGRES_PASSWORD"
            value = "mypassword"
          }

          env {
            name  = "POSTGRES_DB"
            value = "myapp"
          }
        }
      }
    }
  }
}

# Postgres Service
resource "kubernetes_service" "postgressvc" {
  metadata {
    name = "postgressvc"
  }

  spec {
    selector = {
      app = "postgressvc"
    }

    port {
      protocol    = "TCP"
      port         = 5432
      target_port  = 5432
    }

    type = "ClusterIP"
  }
}

# NestJS Deployment
resource "kubernetes_deployment" "nestjs" {
  metadata {
    name = "nestjs"
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "nestjssvc"
      }
    }

    template {
      metadata {
        labels = {
          app = "nestjssvc"
        }
      }

      spec {
        container {
          name  = "nestjs"
          image = "cloudservos2607/nest-backend:v1"

          port {
            container_port = 3000
          }

          env {
            name  = "DATABASE_HOST"
            value = "postgressvc"
          }

          env {
            name  = "DATABASE_PORT"
            value = "5432"
          }

          env {
            name  = "DATABASE_USER"
            value = "myuser"
          }

          env {
            name  = "DATABASE_PASSWORD"
            value = "mypassword"
          }

          env {
            name  = "DATABASE_NAME"
            value = "myapp"
          }
        }
      }
    }
  }
}

# NestJS Service
resource "kubernetes_service" "nestjssvc" {
  metadata {
    name = "nestjssvc"
  }

  spec {
    selector = {
      app = "nestjssvc"
    }

    port {
      protocol    = "TCP"
      port         = 3000
      target_port  = 3000
    }

    type = "ClusterIP"
  }
}

# NextJS Deployment
resource "kubernetes_deployment" "nextjs" {
  metadata {
    name = "nextjs"
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "nextjssvc"
      }
    }

    template {
      metadata {
        labels = {
          app = "nextjssvc"
        }
      }

      spec {
        container {
          name  = "nextjs"
          image = "cloudservos2607/next-frontend:v1"

          port {
            container_port = 3001
          }
        }
      }
    }
  }
}

# NextJS Service
resource "kubernetes_service" "nextjssvc" {
  metadata {
    name = "nextjssvc"
  }

  spec {
    selector = {
      app = "nextjssvc"
    }

    port {
      protocol    = "TCP"
      port         = 3001
      target_port  = 3001
    }

    type = "LoadBalancer"
  }
}

